import { FC, useState } from "react";
import {
  Button,
  Dialog,
  Modal,
  ModalProps,
  Text,
  TextInput,
} from "react-native-paper";
import { FlatList, StyleSheet } from "react-native";
import { ApolloQueryResult, useMutation, useQuery } from "@apollo/client";
import {
  CreateDiscussGroupMutation,
  CreateDiscussGroupMutationVariables,
  CreateDiscussionMutation,
  CreateDiscussionMutationVariables,
  DiscussGroupInput,
  Exact,
  GetDiscussionCurrentUserQuery,
  GetFriendOfCurrentUserQuery,
  GetFriendOfCurrentUserQueryVariables,
  InputMaybe,
  MessageInput,
  SendMessageDiscoussGroupMutation,
  SendMessageDiscoussGroupMutationVariables,
  UserChoose,
} from "../../gql/graphql";
import { GET_FRIEND } from "../../graphql/friendRequest/query";
import { useApplication } from "../../store/useApplication";
import { ItemUser } from "./ItemUser";
import { UserDiscussionType } from "../../types/discussion";
import { ItemDiscussionSkeleton } from "../../View/Home/components/ItemDiscussionSkeleton";
import { CREATE_GROUP } from "../../graphql/discussGroup";
import { CREATE_DISCUSSION } from "../../graphql/discussion";
import { SEND_MESSAGE } from "../../graphql/message";

type DiscussionOverlayProps = {
  visible: boolean;
  refetch: (
    variables?:
      | Partial<
          Exact<{
            userId: number;
            cursor?: InputMaybe<number> | undefined;
          }>
        >
      | undefined
  ) => Promise<ApolloQueryResult<GetDiscussionCurrentUserQuery>>;
  onDismiss: () => void;
};

export const DiscussionOverlay: FC<DiscussionOverlayProps> = ({
  visible,
  onDismiss,
  refetch,
}) => {
  const { user, theme } = useApplication();
  const [step, setStep] = useState<number>(0);
  const [messageInput, setMessageInput] = useState<MessageInput>({
    content: "",
    files: [],
  });
  const [createGroup, { data: group }] = useMutation<
    CreateDiscussGroupMutation,
    CreateDiscussGroupMutationVariables
  >(CREATE_GROUP);
  const [sendMessage] = useMutation<
    SendMessageDiscoussGroupMutation,
    SendMessageDiscoussGroupMutationVariables
  >(SEND_MESSAGE);
  const [createDiscussion, { data: createdDiscussion }] = useMutation<
    CreateDiscussionMutation,
    CreateDiscussionMutationVariables
  >(CREATE_DISCUSSION);
  const { data, loading, fetchMore } = useQuery<
    GetFriendOfCurrentUserQuery,
    GetFriendOfCurrentUserQueryVariables
  >(GET_FRIEND, {
    variables: { userId: user?.id as number, cursor: null },
    skip: !user?.id,
    notifyOnNetworkStatusChange: true,
  });
  const [friends, setFriends] = useState<Array<UserDiscussionType>>([]);

  const handleSelect = (a: UserDiscussionType) => {
    setFriends((curr) =>
      curr.find((i) => i.id === a.id)
        ? curr.filter((i) => i.id !== a.id)
        : [...curr, a]
    );
  };
  const clear = () => {
    onDismiss();
    setMessageInput({ content: "", files: [] });
    setFriends([]);
    setStep(0);
  };
  const handleNext = async () => {
    if (step === 0) {
      if (friends.length === 0) return;
      if (friends.length > 1) {
        const data: DiscussGroupInput = {
          groupName: friends.map((a) => a.firstname).join(", "),
        };
        const userChoose: UserChoose = {
          membresId: friends.map((a) => a.id),
        };

        await createGroup({
          variables: { data, userChoose, userId: user?.id as number },
        });
      } else {
        await createDiscussion({
          variables: { userId: user?.id as number, receiverId: friends[0].id },
        });
      }
      setStep(1);
    } else {
      await sendMessage({
        variables: {
          userId: user?.id as number,
          discussionId: createdDiscussion?.createDiscussion.id as number,
          messageInput,
          discussGroupId: group ? group.createDiscussGroup.id : null,
          receiverId: group ? null : friends[0].id,
        },
      });
      await refetch({ cursor: null, userId: user?.id as number });
      clear();
    }
  };
  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title style={styles.title}>Nouveau Message</Dialog.Title>
      <Dialog.Content>
        <Text>
          {step === 0
            ? "Choisissez le(s) personne(s) à qui vous voulez envoyer un message"
            : "Ecriver votre message"}
        </Text>
        {step === 0 ? (
          <FlatList
            data={data?.getFriendOfCurrentUser}
            renderItem={(i) => (
              <ItemUser
                onPress={() => handleSelect(i.item)}
                item={{
                  ...i.item,
                  selected: friends.find((a) => a.id === i.item.id)
                    ? true
                    : false,
                }}
              />
            )}
            ListFooterComponent={
              loading ? <ItemDiscussionSkeleton /> : undefined
            }
            onEndReached={() =>
              data?.getFriendOfCurrentUser.length === 10 &&
              fetchMore({
                variables: {
                  cursor:
                    data.getFriendOfCurrentUser[
                      data.getFriendOfCurrentUser.length - 1
                    ].id,
                },
                updateQuery(previousQueryResult, { fetchMoreResult }) {
                  if (!fetchMoreResult) return previousQueryResult;
                  return {
                    getFriendOfCurrentUser: [
                      ...previousQueryResult.getFriendOfCurrentUser,
                      ...fetchMoreResult.getFriendOfCurrentUser,
                    ],
                  };
                },
              })
            }
            keyExtractor={(item) => `${item.id}`}
          />
        ) : (
          <TextInput
            onChangeText={(e) => setMessageInput({ files: [], content: e })}
            placeholder="message"
            mode="outlined"
          />
        )}
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={clear} textColor={theme.colors.secondary}>
          Annuler
        </Button>
        <Button disabled={friends.length === 0} onPress={handleNext}>
          {step === 0 ? "suivant" : "envoyer"}
        </Button>
      </Dialog.Actions>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  title: { textAlign: "center" },
});
