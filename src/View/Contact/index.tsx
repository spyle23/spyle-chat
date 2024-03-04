import { View } from "react-native";
import { Text, useTheme } from "react-native-paper";

const Contact = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <Text>Contact works!</Text>
    </View>
  );
};

export default Contact;
