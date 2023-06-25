import React from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import CategorySearchCards from "./CategorySearchCards";
import CategoryDropdown from "../CategoryDropdown";

const RenderCategoryItems = () => {
  if (isLoading) {
    content = <ActivityIndicator />;
  } else if (isSuccess) {
    content = <CategorySearchCards categoryItems={categoryItems} />;
  } else if (isError) {
    content = <Text>{error.toString()}</Text>;
  }

  return (
    <View>
      <Text>{selectedItem.name} games</Text>
      {content}
    </View>
  );
};

export default RenderCategoryItems;
