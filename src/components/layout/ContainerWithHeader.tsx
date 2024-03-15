import React, { useEffect } from "react";
import { AppBarComponent } from "../../stack/MainNavigation";
import { View } from "react-native";
import { Portal, useTheme } from "react-native-paper";
import { DiscussionOverlay } from "../Overlay/DiscussionOverlay";
import { useHeaderHook } from "../../hook/application/useHeader";

export const ContainerWithHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const theme = useTheme();
  const { title, actions, newDiscussion, toogleDiscussion } = useHeaderHook();
  return (
    <>
      <AppBarComponent actions={actions} title={title} />
      <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
        {children}
        <Portal>
          <DiscussionOverlay
            visible={newDiscussion}
            onDismiss={() => toogleDiscussion(false)}
          />
        </Portal>
      </View>
    </>
  );
};
