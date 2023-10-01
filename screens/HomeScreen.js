import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import React from "react";
import Header from "../components/home/Header";
import SearchBox from "../components/home/SearchBox";
import { ScrollView } from "react-native";
import Stories from "../components/home/Stories";
import Categories from "../components/home/Categories";
import { useFonts } from "expo-font";
import SelectedCategroyProducts from "../components/home/categoryProducts/SelectedCategroyProducts";

export default function HomeScreen() {
  let [fontsloaded] = useFonts({
    "iran-sanse": require("../assets/fonts/IRANSansWeb.ttf"),
  });
  if (!fontsloaded) {
    return (
      <>
        <View
          style={
            (styles.container,
            { flex: 1, alignItems: "center", justifyContent: "center" })
          }
        >
          <ActivityIndicator size="large" color="black" />
        </View>
      </>
    );
  }
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={true} />
          <Header />
          <SearchBox />
          <Stories />
          <Categories />
          <SelectedCategroyProducts />
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
