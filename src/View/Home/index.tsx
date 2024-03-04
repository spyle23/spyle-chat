import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Home = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Text>Home works!</Text>
    </View>
  );
};
export default Home;
