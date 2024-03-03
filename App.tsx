import { NavigationContainer } from "@react-navigation/native";
import { GraphqlProvider } from "./src/provider/GraphqlProvider";
import { ThemeProvider } from "./src/provider/ThemeProvider";
import { StackProvider } from "./src/provider/StackProvider";
import 'react-native-gesture-handler';

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
