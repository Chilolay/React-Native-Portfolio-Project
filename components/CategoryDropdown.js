import SelectDropdown from "react-native-select-dropdown";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const CategoryDropdown = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <Text>Search By Category</Text>
        <ScrollView>
          <SelectDropdown />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default CategoryDropdown;
