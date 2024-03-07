import { StyleSheet, View, ViewProps, ViewStyle } from "react-native";
import { usePicture } from "../../hook/application/usePicture";
import defaultGroup from "../../../assets/defaultGroup.jpg";
import profile from "../../../assets/profil.png";
import { Avatar } from "react-native-paper";

type DynamicAvatarProps<T> = {
  user: T;
  size?: number;
} & ViewProps;
export const DynamicAvatar = <
  T extends
    | {
        photo?: string | null;
        firstname?: string | null;
        status: boolean | null;
      }
    | { groupName: string; coverPhoto?: string | null },
>({
  user,
  size,
  ...props
}: DynamicAvatarProps<T>) => {
  if (!user) return null;
  const urlGroup =
    "groupName" in user && user.coverPhoto
      ? usePicture(user.coverPhoto)
      : defaultGroup.toString();
  const urlUser =
    "firstname" in user && user.photo
      ? usePicture(user.photo)
      : profile.toString();
  return (
    <View style={{ marginRight: 20, position: "relative" }} {...props}>
      <Avatar.Image
        size={size ?? 45}
        source={{ uri: "groupName" in user ? urlGroup : urlUser }}
      />
      {"firstname" in user && user.status && (
        <View style={dynamicAvatarStyle.dot} />
      )}
    </View>
  );
};

const dynamicAvatarStyle = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    backgroundColor: "lightgreen",
    borderRadius: 5,
    position: "absolute",
    bottom: 0,
    right: 0,
  },
});
