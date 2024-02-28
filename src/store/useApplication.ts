import { MD3Theme } from "react-native-paper";
import { LoginData } from "../types/user";
import { create } from "zustand";
import { darkTheme, lightTheme } from "../theme";
import { UserMode } from "../gql/graphql";

type IApplication = {
  user: LoginData;
  theme: MD3Theme;
  login: (val: LoginData) => void;
  changeTheme: (val: MD3Theme) => void;
  logout: () => void;
};

export const useApplication = create<IApplication>()((set) => ({
  user: null,
  theme: lightTheme,
  login: (val) =>
    set((state) => ({
      ...state,
      user: val,
      theme: val?.mode === UserMode.Dark ? darkTheme : lightTheme,
    })),
  changeTheme: (val) =>
    set((state) => ({
      ...state,
      theme: val,
      user: state.user
        ? {
            ...state.user,
            mode: val.dark ? UserMode.Dark : UserMode.Light,
          }
        : null,
    })),
  logout: () => set((state) => ({ ...state, user: null })),
}));
