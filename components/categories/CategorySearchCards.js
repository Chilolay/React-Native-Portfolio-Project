import { Card, Button } from "react-native-elements";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useState } from "react";
import CategoryModal from "./CategoryModal";
import { useSelector } from "react-redux";
import { useGetCategoriesQuery } from "../../features/apiSlice";

const CategorySearchCards = (props) => {
  const currentCategory = useSelector((state) => state.category.current);
  const [categoryGame, setCategoryGame] = useState(null);

  const {
    data: categoryItems = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery(currentCategory.id);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    <Text>{error.toString()}</Text>;
  }
  if (isSuccess) {
    const renderCategoryCards = ({ item: games }) => {
      let gameName =
        games.name.length > 20 ? games.name.slice(0, 20) + "..." : games.name;
      return (
        <View style={{ flex: 1, paddingBottom: 10 }}>
          <Card
            key={games.id}
            containerStyle={{
              minHeight: 260,
              justifyContent: "flex-end",
            }}
          >
            <View>
              <Card.Image
                style={{
                  resizeMode: "center",
                  marginVertical: "2%",
                  height: 100,
                }}
                source={{ uri: games.image_url }}
              />
            </View>
            <Card.Title>{gameName}</Card.Title>
            <Card.Divider />
            <Button
              title="Learn More"
              accessibilityLabel={`"Learn more about " + ${games.name}`}
              onPress={() => setCategoryGame(games)}
            />
          </Card>
        </View>
      );
    };

    const renderHeader = () => {
      return (
        <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>
          {currentCategory.name}
        </Text>
      );
    };

    return (
      <View>
        <FlatList
          data={categoryItems.games}
          renderItem={renderCategoryCards}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
        />
        <CategoryModal
          categoryGame={categoryGame}
          setCategoryGame={setCategoryGame}
        />
      </View>
    );
  }
};

export default CategorySearchCards;
