import { useQuery, useSubscription } from "@apollo/client";
import { useApplication } from "../../store/useApplication";
import {
  GetDiscussionCurrentUserQuery,
  GetDiscussionCurrentUserQueryVariables,
  MessageToUserSubscription,
  MessageToUserSubscriptionVariables,
  WriteMessageSubscription,
  WriteMessageSubscriptionVariables,
} from "../../gql/graphql";
import { DISCUSSION_CURRENT_USER } from "../../graphql/discussion";
import { LISTEN_MESSAGE, WRITING_MESSAGE } from "../../graphql/message";
import { useEffect, useState } from "react";
import {
  DiscussGroupDiscussionType,
  MessageGlobalApp,
  UserDiscussionType,
} from "../../types/discussion";
import { LoginData } from "../../types/user";

export const determineUserOrGroup = (
  user: LoginData,
  owner: UserDiscussionType,
  receiver: UserDiscussionType | null | undefined,
  discussGroup: DiscussGroupDiscussionType
): DiscussGroupDiscussionType | UserDiscussionType => {
  if (discussGroup) {
    return discussGroup;
  }
  return owner.id === user?.id ? receiver : owner;
};

export const useDiscussion = () => {
  const { user } = useApplication();
  const [discussions, setDiscussions] = useState<MessageGlobalApp[]>([]);
  const {
    data: messageData,
    loading,
    fetchMore,
  } = useQuery<
    GetDiscussionCurrentUserQuery,
    GetDiscussionCurrentUserQueryVariables
  >(DISCUSSION_CURRENT_USER, {
    variables: { userId: user?.id as number, cursor: null },
    skip: !user?.id,
    notifyOnNetworkStatusChange: true,
  });

  const { data } = useSubscription<
    MessageToUserSubscription,
    MessageToUserSubscriptionVariables
  >(LISTEN_MESSAGE, {
    variables: { userId: user?.id as number },
    skip: !user?.id,
  });
  const { data: writting } = useSubscription<
    WriteMessageSubscription,
    WriteMessageSubscriptionVariables
  >(WRITING_MESSAGE, {
    variables: { userId: user?.id as number },
    skip: !user?.id,
  });

  useEffect(() => {
    if (messageData?.getDiscussionCurrentUser) {
      if (data) {
        setDiscussions((curr) =>
          curr.find((i) => i.id === data.messageToUser.id)
            ? curr.map((i) =>
                i.id === data.messageToUser.id
                  ? {
                      ...i,
                      userDiscuss:
                        i.userDiscuss && "firstname" in i.userDiscuss
                          ? { ...i.userDiscuss, status: i.userDiscuss.status }
                          : i.userDiscuss,
                      newMessageNbr: i.newMessageNbr + 1,
                      messages: data.messageToUser.messages,
                    }
                  : i
              )
            : [
                {
                  ...data.messageToUser,
                  newMessageNbr: 1,
                  userDiscuss: determineUserOrGroup(
                    user,
                    data.messageToUser.User,
                    data.messageToUser.Receiver,
                    data.messageToUser.DiscussGroup
                  ),
                  openMessage: false,
                },
                ...curr,
              ]
        );
      }
      if (writting) {
        setDiscussions((curr) =>
          curr.find((i) => i.id === writting.writeMessage.discussionId)
            ? curr.map((i) =>
                i.id === writting.writeMessage.discussionId
                  ? {
                      ...i,
                      writters: writting.writeMessage.isWritting
                        ? [writting.writeMessage.user]
                        : undefined,
                    }
                  : i
              )
            : curr
        );
      }
      setDiscussions((curr) => {
        let distance =
          messageData?.getDiscussionCurrentUser.length - curr.length;
        if (
          distance > 0 &&
          distance < messageData.getDiscussionCurrentUser.length
        ) {
          const arrays = messageData.getDiscussionCurrentUser
            .slice(curr.length)
            .map<MessageGlobalApp>((val) => ({
              ...val,
              newMessageNbr: 0,
              userDiscuss: determineUserOrGroup(
                user,
                val.User,
                val.Receiver,
                val.DiscussGroup
              ),
              openMessage: false,
            }));
          return [...curr, ...arrays];
        } else if (distance === messageData.getDiscussionCurrentUser.length) {
          return messageData.getDiscussionCurrentUser.map<MessageGlobalApp>(
            (val) => ({
              ...val,
              newMessageNbr: 0,
              userDiscuss: determineUserOrGroup(
                user,
                val.User,
                val.Receiver,
                val.DiscussGroup
              ),
              openMessage: false,
            })
          );
        }
        return curr;
      });
    }
  }, [messageData, data, writting]);

  return {
    discussions,
    loading,
    user,
    fetchMore,
  };
};
