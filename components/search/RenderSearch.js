import { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "./SearchBar";

const RenderSearch = ({ search }) => {
  const [searchValue, setSearchValue] = useState("");

  const getInputValue = (searchValue) => {
    console.log(searchValue, "this is the current search value");
    // setSearchValue(searchValue);
  };

  const resetSearchInput = () => {
    console.log("SearchValue has been reset");
    setSearchValue("");
  };

  return (
    <SafeAreaView>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
    </SafeAreaView>
  );
};

export default RenderSearch;
