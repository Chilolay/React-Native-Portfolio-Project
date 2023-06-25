import React from "react";
import { View, Text, ActivityIndicator, SafeAreaView } from "react-native";
import { useGetCategoriesQuery } from "../../features/apiSlice";
import CategorySearchCards from "./CategorySearchCards";

const RenderCategoryItems = ({ selectedItem }) => {
  const categoryValue = selectedItem.id;

  const {
    data: categoryItems = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetCategoriesQuery(categoryValue);

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
