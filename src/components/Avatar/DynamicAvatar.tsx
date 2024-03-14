import { StyleSheet, View, ViewProps } from "react-native";
import { usePicture } from "../../hook/application/usePicture";
import defaultGroup from "../../../assets/defaultGroup.jpg";
import profile from "../../../assets/profil.png";
import { Avatar } from "react-native-paper";
import { useMemo } from "react";
import { AvatarImageSource } from "react-native-paper/lib/typescript/components/Avatar/AvatarImage";

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

  const source = useMemo<AvatarImageSource>(() => {
    if ("groupName" in user) {
      if (user.coverPhoto) {
        return {
          uri: usePicture(user.coverPhoto),
        };
      }
      return defaultGroup;
    } else {
      if (user.photo) {
        return {
          uri: usePicture(user.photo),
        };
      }
      return profile;
    }
  }, [user]);
  return (
    <View style={{ marginRight: 20, position: "relative" }} {...props}>
      <Avatar.Image
        size={size ?? 45}
        source={source}
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
