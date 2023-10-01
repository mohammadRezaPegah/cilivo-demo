import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import CategoryProduct from "./CategoryProduct";

const CategoryProducts = (props) => {
  const [products, setProducts] = useState([]);
  const id = props.id;
  useEffect(() => {
    setProducts([
      {
        id: 1,
        image: "1692719756.jpg",
      },
      {
        id: 2,
        image: "1692720889.jpg",
      },
      {
        id: 3,
        image: "1692721049.jpg",
      },
      {
        id: 4,
        image: "1694862737.png",
      },
      {
        id: 5,
        image: "1694862737.png",
      },
      {
        id: 6,
        image: "1692974799.jpeg",
      },
      {
        id: 7,
        image: "1692774182.jpg",
      },
      {
        id: 8,
        image: "1692774182.jpg",
      },
      {
        id: 9,
        image: "1692719756.jpg",
      },
    ]);
  }, []);

  productsRender = (list) => {
    let elements = list.map((product) => {
      return <CategoryProduct image={product.image} url="#" id={product.id} />;
    });
    return elements;
  };

  productSectionRender = (len, row_len) => {
    let products_ = products;
    let productsList = [];
    while (products_.length > 0) {
      chunk = products_.splice(0, row_len);
      productsList.push(chunk);
    }
    let element = productsList.map((product, index) => {
      if (index < len) {
        return (
          <View style={styles.categoriesContainer} key={"product" + index}>
            {productsRender(product)}
          </View>
        );
      }
    });
    return element;
  };

  return (
    <>
      <View style={styles.selectedCategoriesContainer}>
        <Text style={styles.categoryHeader}>{props.title}</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>
            بیشتر
            <AntDesign name="arrowleft" size={16} color="blue" />
          </Text>
        </TouchableOpacity>
      </View>
      <View>{productSectionRender(3, 3)}</View>
    </>
  );
};

export default CategoryProducts;

const styles = StyleSheet.create({
  selectedCategoriesContainer: {
    marginVertical: 5,
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
  },
  categoryHeader: {
    fontSize: 18,
    fontFamily: "iran-sanse",
    fontWeight: "600",
  },
  showAll: {
    fontFamily: "iran-sanse",
    fontWeight: "600",
    fontSize: 16,
    color: "blue",
  },
  categoriesContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
