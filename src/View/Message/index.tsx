import { FC, useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { ActivityIndicator, Text, useTheme } from "react-native-paper";
import { IBaseScreen } from "../../types/screen";
import Icon from "react-native-vector-icons/MaterialIcons";
import {
  DiscussGroupDiscussionType,
  UserDiscussionType,
} from "../../types/discussion";
import { DynamicAvatar } from "../../components/Avatar/DynamicAvatar";
import { useApplication } from "../../store/useApplication";
import {
  useApolloClient,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";
import {
  MessageInput,
  MessageToUserSubscription,
  MessageToUserSubscriptionVariables,
  MessageTwoUserQuery,
  MessageTwoUserQueryVariables,
  SendMessageDiscussGroupMobileMutation,
  SendMessageDiscussGroupMobileMutationVariables,
  WriteMessageSubscription,
  WriteMessageSubscriptionVariables,
  WrittingCheckMutation,
  WrittingCheckMutationVariables,
} from "../../gql/graphql";
import {
  LISTEN_MESSAGE,
  MESSAGE_TWO_USER,
  SEND_MESSAGE_MOBILE,
  WRITING_MESSAGE,
  WRITTING_CHECK,
} from "../../graphql/message";
import { MessageItem } from "./components/MessageItem";
import { MessageForm } from "./components/MessageForm";

type MessageParamsRoute = {
  detail:
    | {
        id: number;
        userDiscuss:
          | NonNullable<DiscussGroupDiscussionType>
          | UserDiscussionType;
        theme: string;
      }
    | object
    | undefined;
};
const Message: FC<IBaseScreen<MessageParamsRoute>> = ({
  navigation,
  route,
}) => {
  const theme = useTheme();
  const { user } = useApplication();
  const { params } = route;
  const [finished, setFinished] = useState<boolean>(false);
  const apolloClient = useApolloClient();
  const [writters, setWritters] = useState<UserDiscussionType[]>([]);
  const { data: writting } = useSubscription<
    WriteMessageSubscription,
    WriteMessageSubscriptionVariables
  >(WRITING_MESSAGE, {
    variables: { userId: user?.id as number },
    skip: !user?.id,
  });
  const [writte] = useMutation<
    WrittingCheckMutation,
    WrittingCheckMutationVariables
  >(WRITTING_CHECK);
  const [sendMessage] = useMutation<
    SendMessageDiscussGroupMobileMutation,
    SendMessageDiscussGroupMobileMutationVariables
  >(SEND_MESSAGE_MOBILE);
  const [executeQuery, { data: messages, loading, fetchMore }] = useLazyQuery<
    MessageTwoUserQuery,
    MessageTwoUserQueryVariables
  >(MESSAGE_TWO_USER, { notifyOnNetworkStatusChange: true });
  const { data } = useSubscription<
    MessageToUserSubscription,
    MessageToUserSubscriptionVariables
  >(LISTEN_MESSAGE, {
    variables: { userId: user?.id as number },
    skip: !user?.id,
  });
  useEffect(() => {
    if (params && "id" in params) {
      const { userDiscuss, id } = params;
      executeQuery({
        variables: { discussionId: id, cursor: null, limit: 15 },
      });
      navigation.setOptions({
        headerShown: true,
        headerTitle: () => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <DynamicAvatar user={userDiscuss} size={40} />
            <Text style={styles.title}>
              {"groupName" in userDiscuss
                ? userDiscuss.groupName
                : `${userDiscuss.firstname} ${userDiscuss.lastname}`}
            </Text>
          </View>
        ),
        headerLeft: () => (
          <View style={{ paddingLeft: 10 }}>
            <Icon
              name="arrow-back"
              size={24}
              color={theme.dark ? "white" : "black"}
              onPress={() => navigation.goBack()}
            />
          </View>
        ),
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        headerTintColor: theme.dark ? "white" : "black",
        headerRight: () => (
          <View
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Icon
              name="adjust"
              size={24}
              color={theme.dark ? "white" : "black"}
            />
            <Icon
              name="videocam"
              size={24}
              color={theme.dark ? "white" : "black"}
            />
          </View>
        ),
      });
    }
  }, [params, navigation, theme]);

  useEffect(() => {
    if (
      data &&
      params &&
      "id" in params &&
      messages &&
      !messages.messageTwoUser.find(
        (i) => i.id === data.messageToUser.messages[0].id
      )
    ) {
      apolloClient.writeQuery<
        MessageTwoUserQuery,
        MessageTwoUserQueryVariables
      >({
        data: {
          messageTwoUser: [
            ...messages.messageTwoUser,
            ...data.messageToUser.messages,
          ],
        },
        query: MESSAGE_TWO_USER,
        variables: { discussionId: params.id, cursor: null, limit: 15 },
      });
    }
  }, [data, messages, params]);

  useEffect(() => {
    if (
      params &&
      "id" in params &&
      writting &&
      writting.writeMessage.discussionId === params.id
    ) {
      setWritters((curr) => {
        if (writting.writeMessage.isWritting) {
          if (!curr.find((a) => a.id === writting.writeMessage.user.id)) {
            return [...curr, { ...writting.writeMessage.user }];
          }
          return curr;
        } else {
          return curr.filter((a) => a.id !== writting.writeMessage.user.id);
        }
      });
    }
  }, [writting, params]);

  const redefinedSendMessage = async (data: any[], message: MessageInput) => {
    if (params && "id" in params && user) {
      const reponse = await sendMessage({
        variables: {
          data,
          discussionId: params.id,
          userId: user.id,
          messageInput: message,
          discussGroupId:
            "groupName" in params.userDiscuss ? params.userDiscuss.id : null,
          receiverId:
            "firstname" in params.userDiscuss ? params.userDiscuss.id : null,
        },
      });
      if (messages?.messageTwoUser && reponse.data) {
        apolloClient.writeQuery<
          MessageTwoUserQuery,
          MessageTwoUserQueryVariables
        >({
          data: {
            messageTwoUser: [
              ...messages.messageTwoUser,
              ...reponse.data?.sendMessageDiscussGroupMobile.messages,
            ],
          },
          query: MESSAGE_TWO_USER,
          variables: { discussionId: params.id, cursor: null, limit: 15 },
        });
      }
    }
  };

  const handleWrite = async (val: boolean) => {
    if (params && "id" in params && user) {
      await writte({
        variables: {
          isWritting: val,
          userId: user?.id,
          discussionId: params.id,
        },
      });
    }
  };

  return (
    <View
      style={{
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: "flex-start",
      }}
    >
      <FlatList
        inverted
        data={messages?.messageTwoUser}
        contentContainerStyle={{ flexDirection: "column-reverse" }}
        renderItem={({ item }) => (
          <MessageItem
            user={user}
            theme={
              params && "id" in params ? params.theme : theme.colors.primary
            }
            message={item}
          />
        )}
        ListHeaderComponent={
          loading ? <ActivityIndicator animating /> : undefined
        }
        onEndReached={({ distanceFromEnd }) => {
          if (
            distanceFromEnd <= 5 &&
            !loading &&
            params &&
            "id" in params &&
            !finished
          ) {
            fetchMore({
              variables: {
                discussionId: params.id as number,
                cursor: messages?.messageTwoUser[0].id,
                limit: 15,
              },
              updateQuery(previousQueryResult, { fetchMoreResult }) {
                if (!fetchMoreResult) return previousQueryResult;
                if (fetchMoreResult.messageTwoUser.length === 0) {
                  setFinished(true);
                }
                return {
                  messageTwoUser: [
                    ...fetchMoreResult.messageTwoUser,
                    ...previousQueryResult.messageTwoUser,
                  ],
                };
              },
            });
          }
        }}
        keyExtractor={({ id }, index) => `${id}-${index}`}
      />
      {writters.length > 0 && (
        <View
          style={[
            styles.containerWritters,
            { alignItems: "center", paddingHorizontal: 10 },
          ]}
        >
          <View style={[styles.containerWritters, { marginRight: 20 }]}>
            {writters.map((a) => (
              <DynamicAvatar key={a.id} user={a} size={20} />
            ))}
          </View>
          <Text>typing...</Text>
        </View>
      )}
      <MessageForm
        theme={theme}
        sendMessage={redefinedSendMessage}
        writte={handleWrite}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 18 },
  containerWritters: {
    display: "flex",
    flexDirection: "row",
  },
});

export default Message;
