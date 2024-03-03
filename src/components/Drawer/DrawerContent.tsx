import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
} from "@react-navigation/drawer";
import { FC } from "react";
import { useHeaderHook } from "../../hook/application/useHeader";
import { useTheme, Avatar, Text, Drawer, Switch } from "react-native-paper";
import profil from "../../../assets/profil.png";
import { StyleSheet, View } from "react-native";
import { useApplicationHook } from "../../hook/application/useApplicationHook";
import { usePicture } from "../../hook/application/usePicture";
import Icon from "react-native-vector-icons/MaterialIcons";
import { darkTheme, lightTheme } from "../../theme";
import { useDrawerItem } from "../../hook/useDrawerItem";
type PressParams = {
  label: string;
  route: string;
};
export const DrawerContent: FC<DrawerContentComponentProps> = (props) => {
  const { navigation, state } = props;
  const theme = useTheme();
  const { changeTitle } = useHeaderHook();
  const { user, changeTheme, logoutApp } = useApplicationHook();
  const handlePress = (val: PressParams) => {
    navigation.navigate(val.route);
    changeTitle(val.label);
  };
  const items = useDrawerItem();
  const url = user?.photo ? usePicture(user.photo) : profil;
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={{
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: theme.colors.background,
      }}
    >
      <View>
        <View style={drawerStyle.contentAvatar}>
          <Avatar.Image size={100} source={{ uri: url }} />
          <Text style={{ fontSize: 20 }}>
            {user?.firstname + " " + user?.lastname}
          </Text>
        </View>
        <Drawer.Section showDivider={false}>
          {items.map((val, index) => (
            <Drawer.Item
              {...val}
              key={index}
              style={drawerStyle.drawerItem}
              active={state.index === index}
              onPress={() =>
                handlePress({ label: val.label, route: val.route })
              }
            />
          ))}
        </Drawer.Section>
      </View>
      <View style={drawerStyle.bottomMenu}>
        <View style={drawerStyle.containerSwitch}>
          <Icon
            name="light-mode"
            size={24}
            color={theme.dark ? "white" : "black"}
          />
          <Switch
            value={theme.dark}
            style={{ marginHorizontal: 10 }}
            onValueChange={() =>
              changeTheme(theme.dark ? lightTheme : darkTheme)
            }
          />
          <Icon
            name="dark-mode"
            size={24}
            color={theme.dark ? "white" : "black"}
          />
        </View>
        <Drawer.Item
          label="se déconnecter"
          style={{
            backgroundColor: theme.colors.inverseOnSurface,
            borderRadius: 15,
          }}
          onPress={async () => await logoutApp()}
          icon={() => (
            <Icon
              name="logout"
              size={24}
              color={theme.dark ? "white" : "black"}
            />
          )}
        />
      </View>
    </DrawerContentScrollView>
  );
};

const drawerStyle = StyleSheet.create({
  drawerItem: { borderRadius: 15 },
  bottomMenu: {
    marginVertical: 20,
  },
  containerSwitch: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  contentAvatar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
});
