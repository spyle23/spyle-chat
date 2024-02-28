import React from "react";
import { useApplicationHook } from "../hook/application/useApplicationHook";
import { PaperProvider } from "react-native-paper";

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useApplicationHook();
  return <PaperProvider theme={theme}>{children}</PaperProvider>;
};
