import { StyleSheet, View, Image } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
import signin from "../../../assets/login.png";
import { Link } from "@react-navigation/native";

const Signin = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={signin} style={styles.image} />
      <Text
        variant="headlineLarge"
        style={{ ...styles.title, color: theme.colors.primary }}
      >
        Connection
      </Text>
      <View style={styles.containerInput}>
        <TextInput mode="flat" label="Email" style={styles.input} />
        <Icon
          name="email"
          size={20}
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <View style={styles.containerInput}>
        <TextInput mode="flat" label="Mot de Passe" secureTextEntry style={styles.input} />
        <Icon
          name="visibility"
          size={20}
          style={{ position: "absolute", right: 10 }}
        />
      </View>
      <Button mode="contained" style={styles.button}>
        Se connecter
      </Button>

      <Text style={styles.textBottom}>
        Pas encore de compte?{" "}
        <Link
          to={{ screen: "Signup" }}
          style={{
            color: theme.colors.primary,
            fontSize: 15,
            fontWeight: "700",
          }}
        >
          S'inscrire
        </Link>
      </Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    marginBottom: 10,
  },
  textBottom: {
    marginVertical: 10,
  },
  containerInput: {
    width: "80%",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    marginTop: 10,
  },
  input: {
    width: "100%",
  },
  button: {
    marginTop: 20,
  },
  image: {
    width: "80%",
    height: "30%",
  },
});

export default Signin;
