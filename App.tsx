import { NavigationContainer } from "@react-navigation/native";
import { GraphqlProvider } from "./src/provider/GraphqlProvider";
import { ThemeProvider } from "./src/provider/ThemeProvider";
import { AuthStack } from "./src/stack/AuthStack";

export default function App() {
  return (
    <GraphqlProvider>
      <ThemeProvider>
        <NavigationContainer>
          <AuthStack />
        </NavigationContainer>
      </ThemeProvider>
    </GraphqlProvider>
  );
}
