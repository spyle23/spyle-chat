import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenLoader } from "../components/layout/ScreenLoader";
import { lazy } from "react";
const Home = lazy(() => import("../View/Home"));

const { Navigator, Screen } = createNativeStackNavigator();
export const AppStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Home">
        {() => (
          <ScreenLoader>
            <Home />
          </ScreenLoader>
        )}
      </Screen>
    </Navigator>
  );
};
