import { Icon } from "react-native-elements";
import { Pressable, Text } from "react-native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HomeScreen from "./HomeScreen";
import SearchScreen from "./SearchScreen";
import CategorySearchScreen from "./CategorySearchScreen";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => (
            <Pressable onPress={() => navigation.navigate("Home")}>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Game Finder
              </Text>
            </Pressable>
          ),
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
                style={{ marginHorizontal: 5 }}
              />
            ),
          })}
        />
        <Stack.Screen
          name="CategorySearch"
          component={CategorySearchScreen}
          options={({ navigation }) => ({
            title: "CategorySearch",
            headerRight: () => (
              <Icon
                type="font-awesome"
                name="search"
                color="black"
                onPress={() => {
                  navigation.navigate("Search");
                }}
                style={{ marginHorizontal: 5 }}
              />
            ),
            headerLeft: () => (
              <Icon
                type="font-awesome"
                name="home"
                color="black"
                onPress={() => navigation.navigate("Home")}
                style={{ marginHorizontal: 5 }}
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
                style={{ marginHorizontal: 5 }}
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
