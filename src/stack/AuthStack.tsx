import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenLoader } from "../components/layout/ScreenLoader";
import { lazy } from "react";
const Signin = lazy(() => import("../View/Auth/Signin"));
const Signup = lazy(() => import("../View/Auth/Signup"));

const { Navigator, Screen } = createNativeStackNavigator();
export const AuthStack = () => {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Signin">
        {() => (
          <ScreenLoader>
            <Signin />
          </ScreenLoader>
        )}
      </Screen>
      <Screen name="Signup">
        {() => (
          <ScreenLoader>
            <Signup />
          </ScreenLoader>
        )}
      </Screen>
    </Navigator>
  );
};
