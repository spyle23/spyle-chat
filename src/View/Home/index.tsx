import { FlatList, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useDiscussion } from "../../hook/discussion/useDiscussion";
import { ItemDiscussion } from "./components/ItemDiscussion";
import { ItemDiscussionSkeleton } from "./components/ItemDiscussionSkeleton";
import { FC } from "react";
import { IBaseScreen } from "../../types/screen";

const Home: FC<IBaseScreen> = ({ navigation }) => {
  const theme = useTheme();
  const { discussions, loading, fetchMore, user } = useDiscussion();
  return (
    <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <FlatList
        data={discussions}
        renderItem={({ item }) => (
          <ItemDiscussion
            newMessageNbr={item.newMessageNbr}
            writters={item.writters}
            messages={item.messages}
            user={user}
            userDiscuss={item.userDiscuss}
            onPress={() =>
              navigation.navigate("detail", {
                userDiscuss: item.userDiscuss,
                id: item.id,
                theme: item.theme,
              })
            }
          />
        )}
        ListFooterComponent={loading ? <ItemDiscussionSkeleton /> : undefined}
        onEndReached={() =>
          discussions.length === 10 &&
          fetchMore({
            variables: { cursor: discussions[discussions.length - 1].id },
            updateQuery(previousQueryResult, { fetchMoreResult }) {
              if (!fetchMoreResult) return previousQueryResult;
              return {
                getDiscussionCurrentUser: [
                  ...previousQueryResult.getDiscussionCurrentUser,
                  ...fetchMoreResult.getDiscussionCurrentUser,
                ],
              };
            },
          })
        }
        keyExtractor={(item) => `${item.id}`}
      />
    </View>
  );
};
export default Home;
