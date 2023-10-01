import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const SearchBox = () => {
  const [text, setText] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  return (
    <>
      <View style={[styles.searchBoxContainer, styles.elevation]}>
        <View style={styles.searchBoxCustom}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <Fontisto name="filter" size={15} color="#50575e" />
          </TouchableOpacity>
        </View>
        <View style={styles.searchBoxInput}>
          <TextInput
            value={text}
            onChangeText={setText}
            style={styles.input}
            placeholder="جستجو کنید..."
          ></TextInput>
        </View>
        <View style={styles.searchBoxSubmit}>
          <TouchableOpacity style={{ alignItems: "center" }}>
            <FontAwesome name="search" size={15} color="#50575e" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default SearchBox;

const styles = StyleSheet.create({
  searchBoxContainer: {
    backgroundColor: "rgb(244, 241, 241)",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,
    flexDirection: "row",
    marginHorizontal: 20,
    alignItems: "center",
  },
  searchBoxCustom: {
    flex: 1,
  },
  searchBoxInput: {
    flex: 10,
  },
  searchBoxSubmit: {
    flex: 1,
  },
  input: {
    height: 40,
    width: "100%",
    padding: 5,
    fontSize: 16,
    color: "black",
    textAlign: "right",
    fontFamily: "iran-sanse",
  },
  elevation: {
    elevation: 10,
    shadowColor: "#52006A",
  },
});
