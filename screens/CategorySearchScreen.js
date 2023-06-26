import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CategorySearchCards from "../components/categories/CategorySearchCards";
import CategoryDropdown from "../components/CategoryDropdown";

const CategorySearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <CategoryDropdown />
      <CategorySearchCards />
    </SafeAreaView>
  );
};

export default CategorySearchScreen;
