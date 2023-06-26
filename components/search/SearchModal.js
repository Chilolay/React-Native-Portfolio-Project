import {
  Modal,
  View,
  ScrollView,
  Text,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/AntDesign";
import { useState, useCallback, useEffect } from "react";
import { RenderHTML } from "react-native-render-html";

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

const SearchModal = ({ searchInput, setSearchInput }) => {
  const [showModal, setShowModal] = useState(false);

  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (searchInput != null) {
      setShowModal(true);
    }
  }, [searchInput]);

  if (searchInput) {
    return (
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={showModal}
          onRequestClose={() => {
            console.log("closing");
          }}
          style={{ height: height * 2 }}
        >
          <ScrollView contentContainerStyle={styles.scrollView}>
            <View style={styles.modal}>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                <Text style={styles.modalTitle}>{searchInput.name}</Text>
                <Button
                  style={{ flexGrow: 1, justifyContent: "flex-end" }}
                  icon={<Icon name="close" type="antDesign" size={15} />}
                  onPress={() => {
                    setShowModal(false);
                    setSearchInput(null);
                  }}
                />
              </View>
              <View style={styles.mainView}>
                <Text style={styles.modalText}>
                  Number of Players: {searchInput.min_players} -{" "}
                  {searchInput.max_players}
                </Text>
                <Text style={styles.modalText}>
                  Playtime: {searchInput.min_playtime} -{" "}
                  {searchInput.max_playtime} minutes.
                </Text>
                <Text style={styles.modalText}>
                  For players age {searchInput.min_age} and up
                </Text>
                <Text style={{ margin: 5, marginBottom: 20 }}>
                  Description:
                  <RenderHTML
                    contentWidth={width}
                    source={{ html: searchInput.description }}
                  />
                </Text>
              </View>
              <OpenUrl url={searchInput.official_url}>
                <Text>See Game Rules Here</Text>
              </OpenUrl>
            </View>
          </ScrollView>
        </Modal>
      </View>
    );
  } else {
    return <></>;
  }
};

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  scrollView: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 50,
    removeClippedSubviews: true,
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

export default SearchModal;
