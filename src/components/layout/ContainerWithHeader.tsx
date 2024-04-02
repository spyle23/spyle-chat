import React from "react";
import { AppBarComponent } from "../../stack/MainNavigation";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { useHeaderHook } from "../../hook/application/useHeader";

export const ContainerWithHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  const { title, actions } = useHeaderHook();
  return (
    <>
      <AppBarComponent actions={actions} title={title} />
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        {children}
      </View>
    </>
  );
};
