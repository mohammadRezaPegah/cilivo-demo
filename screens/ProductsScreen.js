import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import Products from "../components/products/Products";
import SearchBox from "../components/home/SearchBox";
import Header from "../components/home/Header";

const ProductsScreen = () => {
  return (
    <>
      <ScrollView>
        <SafeAreaView style={styles.container}>
          <StatusBar hidden={true} />
          <Header />
          <SearchBox />
          <Products />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
