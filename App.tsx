import { NavigationContainer } from "@react-navigation/native";
import { GraphqlProvider } from "./src/provider/GraphqlProvider";
import { ThemeProvider } from "./src/provider/ThemeProvider";
import { AuthStack } from "./src/stack/AuthStack";
import { StackProvider } from "./src/provider/StackProvider";

export default function App() {
  return (
    <GraphqlProvider>
      <ThemeProvider>
        <NavigationContainer>
          <StackProvider />
        </NavigationContainer>
      </ThemeProvider>
    </GraphqlProvider>
  );
}
