import { FC, memo } from "react";
import {
  DiscussGroupDiscussionType,
  MessageDiscussionType,
  UserDiscussionType,
} from "../../../types/discussion";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewProps,
} from "react-native";
import { Avatar, Text, useTheme } from "react-native-paper";
import { DynamicAvatar } from "../../../components/Avatar/DynamicAvatar";
import { LoginData } from "../../../types/user";
import LottieView from "lottie-react-native";

type ItemDiscussionProps = {
  newMessageNbr: number;
  user: LoginData;
  writters?: UserDiscussionType[];
  userDiscuss: UserDiscussionType | DiscussGroupDiscussionType;
  messages: MessageDiscussionType[];
} & TouchableOpacityProps;
export const ItemDiscussion: FC<ItemDiscussionProps> = memo(
  ({ messages, newMessageNbr, user, userDiscuss, writters, ...props }) => {
    const theme = useTheme();
    if (!userDiscuss || !user) return null;
    const uploadMessage =
      user.id === messages[0].User.id
        ? "Vous avez envoyé une pièce jointe"
        : "a envoyé une pièce jointe";
    const displayMessage =
      messages[0].content.length > 50
        ? `${messages[0].content.substring(0, 50)}...`
        : messages[0].content;
    const displayMessageUser =
      user.id === messages[0].User.id
        ? `vous: ${displayMessage}`
        : displayMessage;
    return (
      <TouchableOpacity
        style={ItemDiscussionStyle.discussionContainer}
        {...props}
      >
        <DynamicAvatar user={userDiscuss} />
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {"groupName" in userDiscuss
              ? userDiscuss.groupName
              : userDiscuss.firstname + " " + userDiscuss.lastname}
          </Text>
          {writters && writters.length > 0 ? (
            <LottieView
              source={require("../../../../assets/chating.json")}
              autoPlay
              loop
              resizeMode="cover"
              style={{ width: 50, height: 10, marginVertical: 10 }}
            />
          ) : (
            <View style={ItemDiscussionStyle.containerMessage}>
              <Text
                style={{
                  width: "80%",
                  fontWeight: newMessageNbr > 0 ? "bold" : "normal",
                }}
              >
                {messages[0].files.length > 0
                  ? uploadMessage
                  : displayMessageUser}
              </Text>
              {newMessageNbr > 0 && (
                <View
                  style={{
                    ...ItemDiscussionStyle.messageNew,
                    backgroundColor: theme.colors.primary,
                  }}
                />
              )}
            </View>
          )}
        </View>
      </TouchableOpacity>
    );
  }
);

const ItemDiscussionStyle = StyleSheet.create({
  discussionContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 20,
  },
  containerMessage: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageNew: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
});
