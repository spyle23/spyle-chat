import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GraphqlProvider } from "./src/provider/GraphqlProvider";
import { ThemeProvider } from "./src/provider/ThemeProvider";

export default function App() {
  return (
    <GraphqlProvider>
      <ThemeProvider>
        <View style={styles.container}>
          <Text>Open up App.tsx to start working on your app!</Text>
          <StatusBar style="auto" />
        </View>
      </ThemeProvider>
    </GraphqlProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
