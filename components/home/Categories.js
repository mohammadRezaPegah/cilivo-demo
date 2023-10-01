import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import CategoriesList from "../../data/CategoriesList";
import Category from "./Category";

const Categories = () => {
  const [catLists, setCatLists] = useState([]);
  useEffect(() => {
    setCatLists([
      {
        pname: "کشاورزی و دامداری",
        slug: "Agriculture-and-Livestock",
        name: "Agriculture and Livestock",
        code: "AGL",
        active: true,
        image: "MAC.png",
      },
      {
        pname: "صنایع غذایی و نوشیدنی",
        slug: "Food-and-Beverage",
        name: "Food and Beverage",
        code: "FAB",
        active: true,
        image: "MAC.png",
      },
      {
        pname: "مصالح نساجی و-پوشاک",
        slug: "Textile-and-Clothing",
        name: "Textile and Clothing",
        code: "TXC",
        active: true,
        image: "AAA.png",
      },
      {
        pname: "چوب و کاغذ",
        slug: "Wood-and-Paper",
        name: "Wood and Paper",
        code: "WDP",
        active: true,
        image: "airplane.png",
      },
      {
        pname: "چرم و خز",
        slug: "Leather-and-Fur",
        name: "Leather and Fur",
        code: "LFR",
        active: true,
        image: "anchor.png",
      },
      {
        pname: "شیمیایی و بهداشتی",
        slug: "Chemical-and-Hygienic",
        name: "Chemical and Hygienic",
        code: "CHM",
        active: true,
        image: "antenna.png",
      },
      {
        pname: "دارویی",
        slug: "Pharmaceutical",
        name: "Pharmaceutical",
        code: "PHM",
        active: true,
        image: "art.png",
      },
      {
        pname: "پلیمر و پلاستیک",
        slug: "Polymer-and-Plastic",
        name: "Polymer and Plastic",
        code: "PLP",
        active: true,
        image: "car_and_repaire.png",
      },
      {
        pname: "فلزی و معدنی",
        slug: "Metal-and-Mining",
        name: "Metal and Mining",
        code: "MTM",
        active: true,
        image: "COS.png",
      },
    ]);
  }, []);
  catsRender = (list) => {
    let elements = list.map((category) => {
      return (
        <Category
          categoryImage={category.image}
          url="#"
          title={category.pname}
        />
      );
    });
    return elements;
  };

  catSectionRender = (len, row_len) => {
    let cats = catLists;
    let categoriesList = [];
    while (cats.length > 0) {
      chunk = cats.splice(0, row_len);
      categoriesList.push(chunk);
    }
    let element = categoriesList.map((cat, index) => {
      if (index < len) {
        return (
          <View style={styles.categoriesContainer}>{catsRender(cat)}</View>
        );
      }
    });
    return element;
  };
  return (
    <>
      <View style={styles.StoryContainer}>
        <Text style={styles.categoryHeader}>دسته بندی ها</Text>
        <TouchableOpacity>
          <Text style={styles.showAll}>
            نمایش همه
            <AntDesign name="arrowleft" size={16} color="blue" />
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15 }}>{catSectionRender(3, 3)}</View>
    </>
  );
};

export default Categories;

const styles = StyleSheet.create({
  StoryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
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
