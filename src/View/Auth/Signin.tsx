import { StyleSheet, View, Image } from "react-native";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import signin from "../../../assets/login.png";
import { Link } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import { useApplicationHook } from "../../hook/application/useApplicationHook";

type SigninInput = {
  email: string;
  paswword: string;
};

const Signin = () => {
  const theme = useTheme();
  const [visibility, setVisibility] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninInput>({ defaultValues: { email: "", paswword: "" } });
  const { signin: login, loginLoading, error } = useApplicationHook();
  const signinFn = async (data: SigninInput) => {
    try {
      await login(data.email, data.paswword);
    } catch (error) {}
  };
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
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Entrer votre adresse mail",
            },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Veuillez taper une adresse mail valide",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Email"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              right={<TextInput.Icon size={20} icon="email" />}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{ color: "red" }}>{errors.email.message}</Text>
        )}
      </View>
      <View style={styles.containerInput}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "entrer votre mot de passe",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={!visibility}
              placeholder="Mot de passe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={styles.input}
              right={
                <TextInput.Icon
                  onPress={() => setVisibility(!visibility)}
                  size={20}
                  icon={visibility ? "eye-off" : "eye"}
                />
              }
            />
          )}
          name="paswword"
        />
        {errors.paswword && (
          <Text style={{ color: "red" }}>{errors.paswword.message}</Text>
        )}
      </View>
      {error && (
        <Text style={{ marginVertical: 10, color: "red", width: "80%" }}>
          {error.message}
        </Text>
      )}
      <Button
        mode="contained"
        disabled={loginLoading}
        style={styles.button}
        onPress={handleSubmit(signinFn)}
      >
        {loginLoading && <ActivityIndicator animating />} Se connecter
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "80%",
    height: "30%",
  },
});

export default Signin;
