import { Card, Button, Icon } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";
import { useGetSearchQuery } from "../../features/apiSlice";

const RenderSearchCards = ({ data }) => {
  const { data } = useGetSearchQuery;

  return (
    <View style={{ flex: 1 }}>
      <Card style={styles.card}>
        <Card.Image
          style={styles.cardImage}
          source={data.games.images.original}
        />
        <Card.Title>{data.games[0].name}</Card.Title>
        <Text>{data.games[0].description}</Text>
        <Button placeholder="Where To Purchase" />
      </Card>
    </View>
  );
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

export default RenderSearchCards;
