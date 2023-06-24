import { Card, Button, Icon } from "react-native-elements";
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useGetSearchQuery } from "../../features/apiSlice";
import { useState } from "react";
import React from "react";
import SearchModal from './SearchModal'

const SearchCards = (props) => {
  const [searchResult, setSearchResult] = useState(null);

  const renderSearchCards = ({ item }) => {
    return (
      <View style={{ flex: 1, paddingBottom: 10 }}>
        <Card
          key={}
          containerStyle={{
            height: 250,
            justifyContent: "flex-end",
          }}
        >
          <View>
          <Card.Image
            style={styles.cardImage}
            source={data.games.images.original}
          />
          </View>
          <Card.Title>{data.games[0].name}</Card.Title>
          <Card.Divider />
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
          paddingBottom: 150,
        }}
      >
        Pagination Goes Here
      </Text>
    );
  };

  return (
    <View>
      <FlatList 
        // data={props.games}
        // renderItem={renderFeaturedCard}
        // keyExtractor={(item) => item.id}
        numColumns={2}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
      />
      <SearchModal />
    </View>
  )
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    maxHeight: 200,
    maxWidth: 150,
    margin: 10,
  },
});

export default SearchCards;
