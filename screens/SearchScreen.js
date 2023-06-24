import React from "react";
import { SafeAreaView } from "react-native";
import RenderSearch from "../components/search/RenderSearch";
import Pagination from "../components/Pagination";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <RenderSearch />
      <Pagination />
    </SafeAreaView>
  );
};

export default SearchScreen;
