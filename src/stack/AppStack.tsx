import Meet from "../View/Meet";
import MainNavigation from "./MainNavigation";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ContainerWithHeader } from "../components/layout/ContainerWithHeader";
import { DrawerContent } from "../components/Drawer/DrawerContent";
import Groups from "../View/Groups";

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
            <ContainerWithHeader>
              <MainNavigation />
            </ContainerWithHeader>
          )}
        </Screen>
        <Screen name="meet">
          {() => (
            <ContainerWithHeader>
              <Meet />
            </ContainerWithHeader>
          )}
        </Screen>
        <Screen name="groups">
          {() => (
            <ContainerWithHeader>
              <Groups />
            </ContainerWithHeader>
          )}
        </Screen>
      </Navigator>
    </>
  );
};
