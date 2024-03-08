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
import { useLazyQuery, useSubscription } from "@apollo/client";
import {
  MessageToUserSubscription,
  MessageToUserSubscriptionVariables,
  MessageTwoUserQuery,
  MessageTwoUserQueryVariables,
} from "../../gql/graphql";
import { LISTEN_MESSAGE, MESSAGE_TWO_USER } from "../../graphql/message";
import { MessageItem } from "./components/MessageItem";
import { MessageType } from "../../types/message";

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

  return (
    <View style={{ backgroundColor: theme.colors.background, flex: 1 }}>
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
      <View>
        <Text>test</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ title: { fontSize: 18 } });

export default Message;
