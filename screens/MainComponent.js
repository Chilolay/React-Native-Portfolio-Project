import { Icon } from "react-native-elements";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: "Game Finder",
          headerTitleAlign: "center",
          headerBackVisible: "true",
        }}
        initialRouteName="Home"
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={({ navigation }) => ({
            title: "Home",
            headerRight: () => (
              <Icon
                type="font-awesome"
                name="search"
                color="black"
                onPress={() => {
                  navigation.navigate("Search");
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={({ navigation }) => ({
            title: "Search Results",
            headerLeft: () => (
              <Icon
                type="font-awesome"
                name="home"
                color="black"
                onPress={() => navigation.navigate("Home")}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;

// const styles = StyleSheet.create({

// });
