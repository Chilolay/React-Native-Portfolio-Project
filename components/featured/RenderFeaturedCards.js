import { Card, Button, Icon } from "react-native-elements";
import { StyleSheet, View, Text, Modal, FlatList, Linking } from "react-native";
import { useState, useCallback } from "react";
import { FEATURED } from "../../shared/featured";

const RenderFeaturedCards = () => {
  const featArr = [];
  const [showModal, setShowModal] = useState(false);

  while (featArr.length < 10) {
    let newItem = Math.floor(Math.random() * FEATURED.length);
    if (!featArr.includes(FEATURED[newItem])) {
      featArr.push(FEATURED[newItem]);
    }
  }

  let item = featArr.map((featItem) => featItem);
  let url = item.official_url;

  const OpenUrl = ({ url, children }) => {
    const handlePress = useCallback(async () => {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Invalid URL: ${url.tostring()}`);
      }
    }, [url]);
    return <Button title={children} onPress={handlePress} />;
  };

  const featuredCards = ({ item }) => {
    return (
      <>
        <Card style={styles.card} key={item.id}>
          <View>
            <Card.Image
              style={{
                resizeMode: "contain",
                maxHeight: 200,
                maxWidth: 150,
                margin: 5,
              }}
              source={{ uri: item.image_url }}
            />
          </View>
          <Card.Title style={{ wordWrap: "break-word" }}>
            {item.name}
          </Card.Title>
          <Button
            title="Learn More"
            accessibilityLabel={`"Learn more about " + ${item.name}`}
            onPress={() => setShowModal(true)}
          />
        </Card>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => setShowModal(!showModal)}
        >
          <View style={styles.modal}>
            <Text>
              <Text style={styles.modalTitle}>{item.name}</Text>
              <Icon
                name="close"
                type="antDesign"
                onPress={() => setShowModal(!showModal)}
              />
              <Text>
                Number of Players: {item.min_players} - {item.max_players}
              </Text>
              <Text>
                Playtime: {item.min_playtime} - {item.max_playtime} minutes.
              </Text>
              <Text>For players age {item.min_age} and up</Text>
              <Text>{item.description}</Text>
            </Text>
            <OpenUrl url={item.official_url}>
              <Text>See Game Rules Here</Text>
            </OpenUrl>
          </View>
        </Modal>
      </>
    );
  };

  return (
    <FlatList
      data={featArr}
      renderItem={featuredCards}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{ marginHorizontal: 20, paddingVertical: 20 }}
    />
  );
};

export default RenderFeaturedCards;

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    margin: 0,
    marginBottom: 20,
  },
  modal: {
    justifyContent: "center",
    margin: 20,
  },
});
