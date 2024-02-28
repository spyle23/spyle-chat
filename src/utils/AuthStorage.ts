import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOCALSTORAGE } from "../constants/app";
import { LoginData } from "../types/user";

export const AuthStorage = {
  isAuth: async (): Promise<LoginData | undefined> => {
    try {
      const val = await AsyncStorage.getItem(LOCALSTORAGE);
      return val ? JSON.parse(val) : undefined;
    } catch (error) {
      console.log(error);
      return undefined;
    }
  },
  authenticate: async (
    user: LoginData,
    callback?: (data: LoginData) => void
  ): Promise<void> => {
    const jsonValue = JSON.stringify(user);
    await AsyncStorage.setItem(LOCALSTORAGE, jsonValue);
    callback && callback(user);
  },
  clearToken: async(callback: () => void): Promise<void> => {
    await AsyncStorage.clear();
    callback();
  },
};
