import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Product = (props) => {
  console.log(props.product);
  const product = props.product;
  const image = "https://cilivo.com/images/products/" + product.image;
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          console.log();
        }}
      >
        <View style={styles.productCard}>
          <View style={styles.productCardImage}>
            <Image source={{ uri: image }} style={styles.image} />
          </View>
          <View style={styles.productCardInformation}>
            <Text style={styles.name}>{product.name}</Text>
            <Text style={styles.price}>{product.price}</Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Octicons name="organization" size={13} color="gray" />
              <Text style={[styles.price, { marginHorizontal: 5 }]}>
                {product.person_type}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="location-sharp" size={13} color="gray" />
              <Text style={[styles.price, { marginHorizontal: 5 }]}>
                {product.country}, {product.state}, {product.city}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="md-eye" size={13} color="gray" />
              <Text style={[styles.price, { marginHorizontal: 5 }]}>
                {product.view}
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="calendar" size={13} color="gray" />
              <Text style={[styles.price, { marginHorizontal: 5 }]}>
                {product.created_at}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Product;

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    height: 150,
    marginVertical: 5,
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 15,
  },
  productCardImage: {
    flex: 1.5,
    height: 140,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 15,
  },
  productCardInformation: {
    flex: 2.5,
    paddingHorizontal: 10,
  },
  name: {
    fontFamily: "iran-sanse",
    fontSize: 14,
  },
  price: {
    fontFamily: "iran-sanse",
    fontSize: 12,
    color: "gray",
  },
});
