import { Card, Button } from "react-native-elements";
import { View, Text, FlatList } from "react-native";
import { useState } from "react";
import CategoryModal from "./CategoryModal";
// import Pagination from "../Pagination";

const CategorySearchCards = (props) => {
  const [categoryGame, setCategoryGame] = useState(null);

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
        {/* <Pagination /> */}
      </Text>
    );
  };

  return (
    <View>
      <FlatList
        data={props.games}
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
};

export default CategorySearchCards;
