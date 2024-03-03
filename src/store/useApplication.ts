import { AppbarActionProps, MD3Theme } from "react-native-paper";
import { LoginData } from "../types/user";
import { create } from "zustand";
import { darkTheme, lightTheme } from "../theme";
import { UserMode } from "../gql/graphql";
import { AppBarComponentProps } from "../stack/MainNavigation";

type IApplication = {
  user: LoginData;
  theme: MD3Theme;
  login: (val: LoginData) => void;
  changeTheme: (val: MD3Theme) => void;
  logout: () => void;
};

type IHeader = {
  changeHead: (val: string, tab: AppbarActionProps[]) => void;
} & AppBarComponentProps;

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

export const useHeader = create<IHeader>()((set) => ({
  title: "discussions",
  actions: [{ icon: "camera" }],
  changeHead: (val, tab) =>
    set((state) => ({
      ...state,
      title: val,
      actions: tab,
    })),
}));
