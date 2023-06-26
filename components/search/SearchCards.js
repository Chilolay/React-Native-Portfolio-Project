import { Card, Button } from "react-native-elements";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import { useGetSearchQuery } from "../../features/apiSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchModal from "./SearchModal";
import { useNavigation } from "@react-navigation/native";

const SearchCards = ({ searchVal }) => {
  // const currentSearch = useSelector((state) => state.search.current);
  const [searchInput, setSearchInput] = useState(searchVal);
  // console.log("currentSearch", currentSearch);
  const {
    data: searchItems = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetSearchQuery(searchVal);

  if (isLoading) {
    return <ActivityIndicator />;
  }
  if (isError) {
    <Text>{error.toString()}</Text>;
  }
  if (isSuccess) {
    const renderSearchCards = ({ item: games }) => {
      let gameName =
        games.name.length > 20 ? games.name.slice(0, 20) + "..." : games.name;
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
              onPress={() => setSearchInput(games)}
            />
          </Card>
        </View>
      );
    };

    const renderHeader = () => {
      return (
        <Text style={{ fontSize: 20, fontWeight: "bold", alignSelf: "center" }}>
          Here's what we found...
        </Text>
      );
    };

    return (
      <View>
        <FlatList
          data={searchItems.games}
          renderItem={renderSearchCards}
          keyExtractor={(item) => item.id}
          numColumns={2}
          ListHeaderComponent={renderHeader}
          contentContainerStyle={{
            marginHorizontal: 20,
            paddingVertical: 20,
          }}
        />
        <SearchModal
          searchInput={searchInput}
          setSearchInput={setSearchInput}
        />
      </View>
    );
  }
};

export default SearchCards;
