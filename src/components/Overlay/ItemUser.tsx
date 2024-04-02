import { FC } from "react";
import { UserDiscussionType } from "../../types/discussion";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { DynamicAvatar } from "../Avatar/DynamicAvatar";
import { Text } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialIcons";
type ItemUserProps = {
  item: UserDiscussionType & { selected: boolean };
} & TouchableOpacityProps;
export const ItemUser: FC<ItemUserProps> = ({ item, ...props }) => {
  const { selected, ...other } = item;
  return (
    <TouchableOpacity style={[styles.container]} {...props}>
      <DynamicAvatar user={{ ...other }} />
      <Text>{other.firstname + " " + other.lastname}</Text>
      {selected && <Icon name="check-circle" size={30} color="green" style={styles.icon} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    position: "relative"
  },
  icon: {
    position: "absolute",
    right: 10
  }
});
