import React from "react";
import { AppBarComponent } from "../../stack/MainNavigation";
import { useHeaderHook } from "../../hook/application/useHeader";

export const ContainerWithHeader = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { title, actions } = useHeaderHook();
  return (
    <>
      <AppBarComponent actions={actions} title={title} />
      {children}
    </>
  );
};
