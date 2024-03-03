import Icon from "react-native-vector-icons/MaterialIcons";
import { IDrawerItem } from "../types/drawer";
import { useTheme } from "react-native-paper";

export const useDrawerItem = (): IDrawerItem[] => {
  const theme = useTheme();
  return [
    {
      label: "discussions",
      icon: () => (
        <Icon name="home" size={24} color={theme.dark ? "white" : "black"} />
      ),
      route: "discussions",
    },
    {
      label: "réunion",
      icon: () => (
        <Icon
          name="video-call"
          size={24}
          color={theme.dark ? "white" : "black"}
        />
      ),
      route: "meet",
    },
    {
      label: "groupes",
      icon: () => (
        <Icon name="group" size={24} color={theme.dark ? "white" : "black"} />
      ),
      route: "groups",
    },
  ];
};
