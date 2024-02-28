import { FC, Suspense } from "react";
import { ActivityIndicator } from "react-native-paper";

type ScreenLoaderProps = {
  children: JSX.Element;
};
export const ScreenLoader: FC<ScreenLoaderProps> = ({ children }) => {
  return (
    <Suspense fallback={<ActivityIndicator animating />}>{children}</Suspense>
  );
};
