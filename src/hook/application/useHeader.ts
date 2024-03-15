import { AppBarComponentProps } from "../../stack/MainNavigation";
import { useHeader } from "../../store/useApplication";

export const useHeaderHook = () => {
  const { title, actions, changeHead, toogleDiscussion, newDiscussion } =
    useHeader();
  const appbarActions: AppBarComponentProps[] = [
    {
      title: "discussions",
      actions: [
        {
          icon: "comment-plus-outline",
          onPress: () => toogleDiscussion(!newDiscussion),
        },
      ],
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
    newDiscussion,
    toogleDiscussion,
    actions,
  };
};
