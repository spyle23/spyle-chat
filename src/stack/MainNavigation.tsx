import { FC, lazy } from "react";
import {
  BottomNavigation,
  Text,
  AppbarActionProps,
  Appbar,
  useTheme,
} from "react-native-paper";
import Icon from "react-native-vector-icons/AntDesign";
import {
  DrawerActions,
  useNavigation,
  CommonActions,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useHeaderHook } from "../hook/application/useHeader";
import { ScreenLoader } from "../components/layout/ScreenLoader";

const Home = lazy(() => import("../View/Home"));
const Contact = lazy(() => import("../View/Contact"));

export type AppBarComponentProps = {
  title?: string;
  actions: AppbarActionProps[];
};

export const AppBarComponent: FC<AppBarComponentProps> = ({
  title,
  actions,
}) => {
  const navigation = useNavigation();

  return (
    <Appbar.Header>
      <Appbar.Action
        icon={"menu"}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <Appbar.Content title={title} />
      {actions.map((val, i) => (
        <Appbar.Action key={i} {...val} />
      ))}
    </Appbar.Header>
  );
};

const { Navigator, Screen } = createBottomTabNavigator();

const MainNavigation = () => {
  const theme = useTheme();
  const { changeTitle } = useHeaderHook();
  return (
    <>
      <Navigator
        screenOptions={{ headerShown: false }}
        tabBar={({ navigation, state, descriptors, insets }) => (
          <BottomNavigation.Bar
            navigationState={state}
            safeAreaInsets={insets}
            compact
            renderLabel={({ route, focused }) => (
              <Text
                style={{
                  color: focused
                    ? theme.colors.primary
                    : theme.dark
                      ? "grey"
                      : undefined,
                  textAlign: "center",
                }}
              >
                {route.name}
              </Text>
            )}
            activeIndicatorStyle={{ backgroundColor: undefined }}
            onTabPress={({ route, preventDefault }) => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (event.defaultPrevented) {
                preventDefault();
              } else {
                navigation.dispatch({
                  ...CommonActions.navigate(route.name, route.params),
                  target: state.key,
                });
              }
              changeTitle(route.name);
            }}
            renderIcon={({ route, focused, color }) => {
              const { options } = descriptors[route.key];
              if (options.tabBarIcon) {
                return options.tabBarIcon({ focused, color, size: 24 });
              }

              return null;
            }}
          />
        )}
      >
        <Screen
          name="discussions"
          options={{
            tabBarIcon: ({ size, focused }) => (
              <Icon
                name="message1"
                color={
                  focused
                    ? theme.colors.primary
                    : theme.dark
                      ? "grey"
                      : undefined
                }
                size={size}
              />
            ),
          }}
        >
          {(props) => (
            <ScreenLoader>
              <Home {...props} />
            </ScreenLoader>
          )}
        </Screen>
        <Screen
          name="contacts"
          options={{
            tabBarIcon: ({ focused, size }) => (
              <Icon
                name="contacts"
                size={size}
                color={
                  focused
                    ? theme.colors.primary
                    : theme.dark
                      ? "grey"
                      : undefined
                }
              />
            ),
          }}
        >
          {(props) => (
            <ScreenLoader>
              <Contact {...props} />
            </ScreenLoader>
          )}
        </Screen>
      </Navigator>
    </>
  );
};

export default MainNavigation;
