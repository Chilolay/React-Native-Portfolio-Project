import FontAwesome from "react-native-vector-icons/FontAwesome";
import { StyleSheet, View, TextInput } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrent } from "../../features/searchSlice";
import SearchCards from "./SearchCards";

const SearchBar = () => {
  const [searchVal, setSearchVal] = useState("");
  const dispatch = useDispatch();

  const resetSearchInput = () => {
    setSearchVal("");
  };

  useEffect(() => {
    if (searchVal.length) {
      dispatch(setCurrent(searchVal));
    }
  }, [searchVal]);

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.searchBar}>
          <FontAwesome
            name="search"
            type="feather"
            size={15}
            style={{ fontSize: 20, color: "#999999" }}
          />
          <TextInput
            style={styles.input}
            placeholder="Search Here..."
            onKeyPress={(key) => {
              if (key.code == "Enter") {
                setSearchVal(key.target.value);
              }
            }}
            maxLength={15}
            autoComplete="off"
            inputMode="text"
            numberOfLines={1}
          />
        </View>
      </View>
      <SearchCards searchVal={searchVal} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingVertical: "5%",
    margin: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    paddingVertical: 5,
    paddingHorizontal: 25,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "light-blue",
    borderRadius: 15,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  // searchBarClosed: {
  //   padding: 25,
  //   flexDirection: "row",
  //   width: "95%",
  //   backgroundColor: "grey",
  //   borderRadius: 15,
  //   alignItems: "center",
  // },
  input: {
    color: "#999999",
    fontSize: 20,
    marginLeft: 15,
    width: "90%",
  },
});

export default SearchBar;
