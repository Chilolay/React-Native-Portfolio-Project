import React from "react";
import { SafeAreaView } from "react-native";
import SearchBar from "../components/search/SearchBar";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <SearchBar />
    </SafeAreaView>
  );
};

export default SearchScreen;
