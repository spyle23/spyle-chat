import { Image, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Text,
  TextInput,
  useTheme,
} from "react-native-paper";
import signup from "../../../assets/signup.png";
// import Icon from "react-native-vector-icons/MaterialIcons";
import { styles } from "./Signin";
import { Link } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { SignupInput } from "../../gql/graphql";
import { useState } from "react";
import { useApplicationHook } from "../../hook/application/useApplicationHook";

const Signup = () => {
  const theme = useTheme();
  const [visibility, setVisibility] = useState<boolean>(false);
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupInput>();
  const { signupApp, signupLoading } = useApplicationHook();
  const signupFn = async (data: SignupInput) => {
    try {
      await signupApp(data);
    } catch (error) {}
  };
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
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "Veuillez entrer votre nom",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Nom"
              onBlur={onBlur}
              onChangeText={onChange}
              style={styles.input}
              value={value ?? ""}
            />
          )}
          name="firstname"
        />
        {errors.firstname && (
          <Text style={{ color: "red" }}>{errors.firstname.message}</Text>
        )}
      </View>
      <View style={styles.containerInput}>
        <Controller
          control={control}
          rules={{
            required: {
              value: true,
              message: "veuillez entrer votre prénom",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              placeholder="Prénom"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value ?? ""}
            />
          )}
          name="lastname"
        />
        {errors.lastname && (
          <Text style={{ color: "red" }}>{errors.lastname.message}</Text>
        )}
      </View>
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
              value={value ?? ""}
              right={<TextInput.Icon icon="email" />}
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
              message: "votre mot de passe est requis",
            },
            minLength: {
              value: 8,
              message: "votre mot de passe doit au moins être à 8 charactère",
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              secureTextEntry={!visibility}
              placeholder="Mot de passe"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value ?? ""}
              right={
                <TextInput.Icon
                  onPress={() => setVisibility(!visibility)}
                  icon={visibility ? "eye-off" : "eye"}
                />
              }
            />
          )}
          name="password"
        />
        {errors.password && (
          <Text style={{ color: "red" }}>{errors.password.message}</Text>
        )}
      </View>
      <Button
        mode="contained"
        disabled={signupLoading}
        style={styles.button}
        onPress={handleSubmit(signupFn)}
      >
        {signupLoading && <ActivityIndicator animating />} S'inscrire
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
          Se connecter
        </Link>
      </Text>
    </View>
  );
};

export default Signup;
