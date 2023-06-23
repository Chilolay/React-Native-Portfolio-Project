import { Modal, View, Text, StyleSheet, Linking } from "react-native";
import { Icon, Button } from "react-native-elements";
import { useState, useCallback, useEffect } from "react";

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

const RenderModal = ({ featuredGame, setFeaturedGame }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (featuredGame != null) {
      setShowModal(true);
    }
  }, [featuredGame]);

  if (featuredGame) {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log("closing");
        }}
      >
        <View>
          <View>
            <Text>{featuredGame.name}</Text>
            <Icon
              name="close"
              type="antDesign"
              onPress={() => {
                setShowModal(false);
                setFeaturedGame(null);
              }}
            />
          </View>
          <View>
            <Text>
              Number of Players: {featuredGame.min_players} -{" "}
              {featuredGame.max_players}
            </Text>
            <Text>
              Playtime: {featuredGame.min_playtime} -{" "}
              {featuredGame.max_playtime} minutes.
            </Text>
            <Text>For players age {featuredGame.min_age} and up</Text>
            <Text>{featuredGame.description}</Text>
          </View>
          <OpenUrl url={featuredGame.official_url}>
            <Text>See Game Rules Here</Text>
          </OpenUrl>
          {}
        </View>
      </Modal>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    flexDirection: "row",
    // justifyContent: "center",
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalTitle: {
    display: "flex",
    flexDirection: "row",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "flex-start",
  },
  modalIcon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
  },
  mainText: {
    justifyContent: "flex-start",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default RenderModal;
