import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryProducts from "./CategoryProducts";

const SelectedCategroyProducts = () => {
  const [categories, seCategories] = useState([]);
  useEffect(() => {
    seCategories([
      {
        id: 1,
        pname: "کشاورزی و دامداری",
        slug: "Agriculture-and-Livestock",
        name: "Agriculture and Livestock",
        code: "AGL",
        active: true,
        image: "MAC.png",
      },
      {
        id: 2,
        pname: "صنایع غذایی و نوشیدنی",
        slug: "Food-and-Beverage",
        name: "Food and Beverage",
        code: "FAB",
        active: true,
        image: "MAC.png",
      },
      {
        id: 3,
        pname: "مصالح نساجی و-پوشاک",
        slug: "Textile-and-Clothing",
        name: "Textile and Clothing",
        code: "TXC",
        active: true,
        image: "AAA.png",
      },
      {
        id: 4,
        pname: "چوب و کاغذ",
        slug: "Wood-and-Paper",
        name: "Wood and Paper",
        code: "WDP",
        active: true,
        image: "airplane.png",
      },
      {
        id: 5,
        pname: "چرم و خز",
        slug: "Leather-and-Fur",
        name: "Leather and Fur",
        code: "LFR",
        active: true,
        image: "anchor.png",
      },
      {
        id: 6,
        pname: "شیمیایی و بهداشتی",
        slug: "Chemical-and-Hygienic",
        name: "Chemical and Hygienic",
        code: "CHM",
        active: true,
        image: "antenna.png",
      },
      {
        id: 7,
        pname: "دارویی",
        slug: "Pharmaceutical",
        name: "Pharmaceutical",
        code: "PHM",
        active: true,
        image: "art.png",
      },
      {
        id: 8,
        pname: "پلیمر و پلاستیک",
        slug: "Polymer-and-Plastic",
        name: "Polymer and Plastic",
        code: "PLP",
        active: true,
        image: "car_and_repaire.png",
      },
      {
        id: 9,
        pname: "فلزی و معدنی",
        slug: "Metal-and-Mining",
        name: "Metal and Mining",
        code: "MTM",
        active: true,
        image: "COS.png",
      },
    ]);
  }, []);
  return (
    <View>
      {categories.map((category) => {
        return <CategoryProducts id={category.id} title={category.pname} />;
      })}
    </View>
  );
};

export default SelectedCategroyProducts;

const styles = StyleSheet.create({});
