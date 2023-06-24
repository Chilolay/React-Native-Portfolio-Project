import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Icon, Button } from "react-native-elements";

const SearchBar = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Button
          icon={<Icon name="search" type="feather" size={15} />}
          onPress={() => {
            getInputValue(searchValue);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search Here..."
          value={props.searchValue}
          onChangeText={props.setSearchValue}
          autoComplete="off"
          inputMode="text"
          numberOfLines={1}
        />
        <Button
          icon={<Icon name="close" type="font=awesome" size={15} />}
          onPress={() => {
            resetSearchInput;
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchbarActive: {
    padding: 10,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  //   searchBarClosed: {
  //     padding: 10,
  //     flexDirection: "row",
  //     width: "95%",
  //     backgroundColor: "#d9dbda",
  //     borderRadius: 15,
  //     alignItems: "center",
  //   },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});

export default SearchBar;
