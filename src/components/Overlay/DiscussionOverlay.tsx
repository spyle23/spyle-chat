import { FC } from "react";
import { Button, Dialog, Modal, ModalProps, Text } from "react-native-paper";
import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import {
  GetFriendOfCurrentUserQuery,
  GetFriendOfCurrentUserQueryVariables,
} from "../../gql/graphql";
import { GET_FRIEND } from "../../graphql/friendRequest/query";
import { useApplication } from "../../store/useApplication";

type DiscussionOverlayProps = {
  visible: boolean;
  onDismiss: () => void;
};

export const DiscussionOverlay: FC<DiscussionOverlayProps> = ({
  visible,
  onDismiss,
}) => {
    const { user } = useApplication()
  const { data } = useQuery<
    GetFriendOfCurrentUserQuery,
    GetFriendOfCurrentUserQueryVariables
  >(GET_FRIEND, {
    variables: { userId: user?.id as number, cursor: null },
    skip: !user?.id,
    notifyOnNetworkStatusChange: true,
  });
  return (
    <Dialog visible={visible} onDismiss={onDismiss}>
      <Dialog.Title style={styles.title}>Nouveau Message</Dialog.Title>
      <Dialog.Content>
        <Text>
          Choisissez le(s) personne(s) à qui vous voulez envoyer un message
        </Text>
      </Dialog.Content>
      <Dialog.Actions>
        <Button onPress={onDismiss}>Annuler</Button>
      </Dialog.Actions>
    </Dialog>
  );
};

const styles = StyleSheet.create({
  title: { textAlign: "center" },
});
