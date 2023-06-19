import { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, StyleSheet } from "react-native";

const SearchBar = (search) => {
  const [search, setSearch] = useState("");

  const updateSearch = (search) => {
    setSearch(search);
  };

  return (
    <View>
      <SearchBar
        round={true}
        placeholder="Search Here..."
        onChangeText={handleSearchUpdate}
        onClear={handleOnClear}
        onCancel={handleOnCancel}
        value={search}
      />
    </View>
  );
};

export default SearchBar;
