import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Category = (props) => {
  const image = `https://cilivo.com/images/category/${props.categoryImage}`;
  const url = props.url;
  const title = props.title;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log();
        }}
      >
        <View style={styles.categoryContainer} key={props.id}>
          <View
            style={{
              backgroundColor: "gray",
              padding: 5,
              borderRadius: 5,
              backgroundColor: "rgb(244, 241, 241)",
            }}
          >
            <Image source={{ uri: image }} style={styles.categoryImage} />
          </View>
          <Text style={styles.categoryTitle}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Category;

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  categoryTitle: {
    fontSize: 10,
    textAlign: "center",
    width: 75,
  },
  categoryImage: {
    width: 75,
    height: 75,
  },
});
