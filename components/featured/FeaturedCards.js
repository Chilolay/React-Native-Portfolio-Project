import { Card, Button, Icon } from "react-native-elements";
import { useState } from "react";
import { StyleSheet, View, Text, FlatList, Linking, Modal } from "react-native";
import RenderModal from "./RenderModal";

const FeaturedCards = (props) => {
  const [featuredGame, setFeaturedGame] = useState(null);

  const renderFeaturedCard = ({ item: games }) => {
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
          <Card.Divider style={{}} />
          <Button
            title="Learn More"
            accessibilityLabel={`"Learn more about " + ${games.name}`}
            onPress={() => setFeaturedGame(games)}
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
          paddingBottom: 300,
        }}
      >
        Pagination Goes Here
      </Text>
    );
  };

  return (
    <View>
      <FlatList
        data={props.games}
        renderItem={renderFeaturedCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
      />
      <RenderModal
        featuredGame={featuredGame}
        setFeaturedGame={setFeaturedGame}
      />
    </View>
  );
};

export default FeaturedCards;

const styles = StyleSheet.create({});
