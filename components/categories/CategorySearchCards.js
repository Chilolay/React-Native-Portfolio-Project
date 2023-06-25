import { Card, Button } from "react-native-elements";
import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import CategoryModal from "./CategoryModal";
import Pagination from "../Pagination";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useGetCategoriesQuery } from "../../features/apiSlice";
import { ActivityIndicator } from "react-native";

const CategorySearchCards = (props) => {
  const currentCategory = useSelector((state) => state.category.current);
  const [categoryGame, setCategoryGame] = useState(null);
  console.log("currentCategory", currentCategory);
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
      return (
        <View style={{ flex: 1, paddingBottom: 10 }}>
          <Card
            key={games.id}
            containerStyle={{
              height: 250,
              justifyContent: "flex-end",
            }}
          >
            <View>
              <Card.Image
                style={{
                  resizeMode: "contain",
                  marginBottom: 15,
                  height: 100,
                }}
                source={{ uri: games.image_url }}
              />
            </View>
            <Card.Title>{games.name}</Card.Title>
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
          Featured Games
        </Text>
      );
    };
    const renderFooter = () => {
      return (
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            alignSelf: "center",
            paddingBottom: 150,
          }}
        >
          <Pagination />
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
          ListFooterComponent={renderFooter}
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
