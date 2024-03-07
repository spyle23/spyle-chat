import { MotiView } from "moti";
import { Skeleton } from "moti/skeleton";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
export const ItemDiscussionSkeleton = () => {
  const theme = useTheme();
  const colorMode = theme.dark ? "dark" : "light";
  return (
    <MotiView
      transition={{ type: "timing" }}
      style={ItemDiscussionSkeletonStyle.container}
      animate={{ backgroundColor: theme.dark ? "#000000" : "#ffffff" }}
    >
      {[1, 2, 3, 4, 5].map((val) => (
        <View key={val} style={ItemDiscussionSkeletonStyle.containerSkeleton}>
          <View style={ItemDiscussionSkeletonStyle.AvatarSkeleton}>
            <Skeleton
              colorMode={colorMode}
              radius="round"
              height={45}
              width={45}
            />
          </View>
          <View style={ItemDiscussionSkeletonStyle.TextSkeleton}>
            <View style={{ marginBottom: 10, width: "60%" }}>
              <Skeleton height={15} colorMode={colorMode} width={"100%"} />
            </View>
            <View style={{ marginBottom: 10, width: "60%" }}>
              <Skeleton height={15} colorMode={colorMode} width={"100%"} />
            </View>
          </View>
        </View>
      ))}
    </MotiView>
  );
};

const ItemDiscussionSkeletonStyle = StyleSheet.create({
  container: {
    flex: 1,
  },
  AvatarSkeleton: {
    display: "flex",
    alignItems: "center",
  },
  TextSkeleton: {
    display: "flex",
    alignItems: "center",
  },
  containerSkeleton: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
});
