import { MD3LightTheme, MD3DarkTheme, MD3Theme } from "react-native-paper";
const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#512da8",
    secondary: "#c2185b",
  },
};

const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#512da8",
    secondary: "#c2185b",
  },
};

export { lightTheme, darkTheme };
