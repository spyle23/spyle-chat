import { useEffect } from "react";
import { useApplication } from "../../store/useApplication";
import { AuthStorage } from "../../utils/AuthStorage";
import { useMutation } from "@apollo/client";
import {
  LoginMutation,
  LoginMutationVariables,
  SignupInput,
  SignupMutation,
  SignupMutationVariables,
} from "../../gql/graphql";
import { LOGIN, SIGNUP } from "../../graphql/user";

export const useApplicationHook = () => {
  const { user, login, changeTheme, logout, theme } = useApplication();
  const [exec, { loading: loginLoading, error }] = useMutation<
    LoginMutation,
    LoginMutationVariables
  >(LOGIN);

  const [signup, { loading: signupLoading }] = useMutation<
    SignupMutation,
    SignupMutationVariables
  >(SIGNUP);

  useEffect(() => {
    if (user) {
      AuthStorage.authenticate(user);
    } else {
      AuthStorage.isAuth().then((val) => {
        login(val);
      });
    }
  }, [user]);

  const logoutApp = () => {
    AuthStorage.clearToken(() => logout());
  };

  const signin = async (email: string, password: string) => {
    const result = await exec({ variables: { email, password } });
    if (result.data && result.data.login.data) {
      login(result.data.login.data);
    }
  };

  const signupApp = async (val: SignupInput) => {
    const result = await signup({ variables: { userInput: val } });
    if (result.data && result.data.signup.data) {
      login(result.data.signup.data);
    }
  };

  return {
    user,
    theme,
    signin,
    loginLoading,
    signupApp,
    signupLoading,
    error,
    changeTheme,
    logoutApp,
  };
};
