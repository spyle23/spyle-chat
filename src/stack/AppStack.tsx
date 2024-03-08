// import Meet from "../View/Meet";
// import MainNavigation from "./MainNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContainerWithHeader } from "../components/layout/ContainerWithHeader";
import { DrawerContent } from "../components/Drawer/DrawerContent";
import { lazy } from "react";
import { ScreenLoader } from "../components/layout/ScreenLoader";
// import Groups from "../View/Groups";

const Meet = lazy(() => import("../View/Meet"));
const MainNavigation = lazy(() => import("./MainNavigation"));
const Groups = lazy(() => import("../View/Groups"));
const Message = lazy(() => import("../View/Message"));

const { Navigator, Screen } = createDrawerNavigator();
export const AppStack = () => {
  return (
    <>
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
        drawerContent={(props) => <DrawerContent {...props} />}
      >
        <Screen name="tab">
          {() => (
            <ScreenLoader>
              <ContainerWithHeader>
                <MainNavigation />
              </ContainerWithHeader>
            </ScreenLoader>
          )}
        </Screen>
        <Screen name="meet">
          {(props) => (
            <ScreenLoader>
              <ContainerWithHeader>
                <Meet {...props} />
              </ContainerWithHeader>
            </ScreenLoader>
          )}
        </Screen>
        <Screen name="groups">
          {(props) => (
            <ScreenLoader>
              <ContainerWithHeader>
                <Groups {...props} />
              </ContainerWithHeader>
            </ScreenLoader>
          )}
        </Screen>
        <Screen name="detail">
          {(props) => (
            <ScreenLoader>
              <Message {...props} />
            </ScreenLoader>
          )}
        </Screen>
      </Navigator>
    </>
  );
};
