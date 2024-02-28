import { Image, View } from "react-native";
import { Button, Text, TextInput, useTheme } from "react-native-paper";
import signup from "../../../assets/signup.png";
import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./Signin";
import { Link } from "@react-navigation/native";

const Signup = () => {
  const theme = useTheme();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={signup} style={{ ...styles.image, width: "90%" }} />
      <Text
        variant="headlineLarge"
        style={{ ...styles.title, color: theme.colors.primary }}
      >
        Inscription
      </Text>
      <View style={styles.containerInput}>
        <TextInput mode="flat" label="Nom" style={styles.input} />
      </View>
      <View style={styles.containerInput}>
        <TextInput mode="flat" label="Prénom" style={styles.input} />
      </View>
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
        S'inscrire
      </Button>

      <Text style={styles.textBottom}>
        Déjà un compte?{" "}
        <Link
          to={{ screen: "Signin" }}
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

export default Signup;
