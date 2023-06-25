import { Modal, View, Text, StyleSheet, Linking } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
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

const CategoryModal = ({ featuredGame, setFeaturedGame }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (featuredGame != null) {
      setShowModal(true);
    }
  }, [featuredGame]);

  if (featuredGame) {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log("closing");
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.modalTitle}>{featuredGame.name}</Text>
                <Button
                  style={{ flexGrow: 1, justifyContent: "flex-end" }}
                  icon={<Icon name="close" type="antDesign" size={15} />}
                  onPress={() => {
                    setShowModal(false);
                    setFeaturedGame(null);
                  }}
                />
              </View>
              <View style={styles.mainView}>
                <Text style={styles.modalText}>
                  Number of Players: {featuredGame.min_players} -{" "}
                  {featuredGame.max_players}
                </Text>
                <Text style={styles.modalText}>
                  Playtime: {featuredGame.min_playtime} -{" "}
                  {featuredGame.max_playtime} minutes.
                </Text>
                <Text style={styles.modalText}>
                  For players age {featuredGame.min_age} and up
                </Text>
                <Text style={{ margin: 5, marginBottom: 20 }}>
                  Description: {featuredGame.description}
                </Text>
              </View>
              <OpenUrl url={featuredGame.official_url}>
                <Text>See Game Rules Here</Text>
              </OpenUrl>
            </View>
          </View>
        </Modal>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modal: {
    alignItems: "center",
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
    fontSize: 20,
    fontWeight: "bold",
    flexGrow: 3,
    justifyContent: "flex-start",
  },
  modalText: {
    margin: 5,
    fontWeight: "bold",
  },
  mainView: {
    marginTop: 22,
  },
});

export default CategoryModal;
