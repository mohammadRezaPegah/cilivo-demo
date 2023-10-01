import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";

const CategoryProduct = (props) => {
  const image = "https://cilivo.com/images/products/" + props.image;
  return (
    <TouchableOpacity
      onPress={() => {
        console.log();
      }}
    >
      <View style={styles.categoryContainer} key={props.id}>
        <View
          style={{
            padding: 5,
            borderRadius: 5,
          }}
        >
          <Image source={{ uri: image }} style={styles.categoryProductImage} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryProduct;

const styles = StyleSheet.create({
  categoryProductImage: {
    width: 125,
    height: 125,
    borderRadius: 5,
  },
});
