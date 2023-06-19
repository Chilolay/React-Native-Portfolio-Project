import { Header } from "react-native-elements";
import { StyleSheet, View, Text } from "react-native";

const NavHeader = () => {
  return (
    <>
      <Header
        style={styles.headerContainer}
        leftComponent={{
          type: "entypo",
          icon: "home",
          color: "#fff",
        }}
        rightComponent={{
          type: "antdesign",
          icon: "search1",
          color: "white",
          style: styles.headerRight,
        }}
        centerComponent={{ text: "Game Finder", style: styles.heading }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "black",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
});

export default NavHeader;
