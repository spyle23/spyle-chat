import { FC } from "react";
import { StyleSheet, View } from "react-native";
import { LoginData } from "../../../types/user";
import { MessageType } from "../../../types/message";
import { Card, Paragraph, Text, useTheme } from "react-native-paper";
import { DynamicAvatar } from "../../../components/Avatar/DynamicAvatar";

type MessageItemProps = {
  theme: string;
  user: LoginData;
  message: MessageType;
};

export const MessageItem: FC<MessageItemProps> = ({ theme, user, message }) => {
  const systemTheme = useTheme();
  return (
    <View
      style={{
        ...styles.container,
        justifyContent:
          user?.id === message.User.id ? "flex-end" : "flex-start",
        alignItems: "center",
      }}
    >
      {user?.id !== message.User.id && (
        <DynamicAvatar size={40} user={message.User} />
      )}
      <Card
        elevation={1}
        style={{
          backgroundColor:
            user?.id === message.User.id
              ? theme
              : systemTheme.dark
                ? "grey"
                : systemTheme.colors.background,
          maxWidth: "80%",
          borderRadius: 25,
        }}
      >
        <Card.Content>
          <Paragraph
            style={{ color: user?.id === message.User.id ? "#fff" : "#000" }}
          >
            {message.content}
          </Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 5,
    paddingHorizontal: 10,
  },
});
