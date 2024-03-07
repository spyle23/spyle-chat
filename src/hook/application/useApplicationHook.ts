import { useEffect } from "react";
import { useApplication } from "../../store/useApplication";
import { AuthStorage } from "../../utils/AuthStorage";
import { useMutation } from "@apollo/client";
import {
  ChangeStatusMutation,
  ChangeStatusMutationVariables,
  LoginMutation,
  LoginMutationVariables,
  SignupInput,
  SignupMutation,
  SignupMutationVariables,
  UpdateUserMutation,
  UpdateUserMutationVariables,
} from "../../gql/graphql";
import { LOGIN, SIGNUP, STATUS, UPDATE_INFO } from "../../graphql/user";

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

  const [changeStatus, { loading: logoutLoading }] = useMutation<
    ChangeStatusMutation,
    ChangeStatusMutationVariables
  >(STATUS);

  const [updateUser, { loading: updateUserLoading }] = useMutation<
    UpdateUserMutation,
    UpdateUserMutationVariables
  >(UPDATE_INFO);

  useEffect(() => {
    if (!user) {
      AuthStorage.isAuth().then((val) => {
        login(val);
      });
    } else {
      AuthStorage.authenticate(user);
    }
  }, [user]);

  const logoutApp = async () => {
    if (!user) return;
    await changeStatus({ variables: { userId: user?.id, status: false } });
    await AuthStorage.clearToken(() => logout());
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
    updateUser,
    updateUserLoading,
    signupLoading,
    logoutLoading,
    error,
    changeTheme,
    logoutApp,
  };
};
