import { useMemo, useState } from "react";
import { AppBarComponentProps } from "../../stack/MainNavigation";
import { useHeader } from "../../store/useApplication";

export const useHeaderHook = () => {
  const { title, actions, changeHead } = useHeader();
  const appbarActions: AppBarComponentProps[] = [
    {
      title: "discussions",
      actions: [{ icon: "camera" }],
    },
    {
      title: "contacts",
      actions: [],
    },
    {
      title: "réunion",
      actions: [],
    },
  ];

  const changeTitle = (val: string) => {
    changeHead(
      val,
      appbarActions.find((a) => a.title === val)?.actions ??
        appbarActions[0].actions
    );
  };

  return {
    title,
    changeTitle,
    actions,
  };
};
