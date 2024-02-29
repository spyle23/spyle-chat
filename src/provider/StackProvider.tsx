import { useApplicationHook } from "../hook/application/useApplicationHook";
import { AppStack } from "../stack/AppStack";
import { AuthStack } from "../stack/AuthStack";

export const StackProvider = () => {
  const { user } = useApplicationHook();
  return user ? <AppStack /> : <AuthStack />;
};
