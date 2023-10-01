import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [nextExists, setNextExists] = useState(true);
  useEffect(() => {
    setProducts([
      {
        id: 1,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 2,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 3,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 4,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 5,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 6,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 7,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 8,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
      {
        id: 9,
        name: "محصول ثبت شده",
        person_type: "حقیقی",
        image: "1692719756.jpg",
        price: "برای استعلام قیمت تماس بگیرید",
        country: "ایران",
        state: "فارس",
        city: "شیراز",
        created_at: "1402-06-27",
        view: 10,
      },
    ]);
  }, []);
  const nextPage = () => {
    if (nextExists === true) {
      setPage(page + 1);
      let prev_products = [...products];
      prev_products.push(
        {
          id: 10,
          name: "محصول ثبت شده",
          person_type: "حقیقی",
          image: "1692719756.jpg",
          price: "برای استعلام قیمت تماس بگیرید",
          country: "ایران",
          state: "فارس",
          city: "شیراز",
          created_at: "1402-06-27",
          view: 11,
        },
        {
          id: 10,
          name: "محصول ثبت شده",
          person_type: "حقیقی",
          image: "1692719756.jpg",
          price: "برای استعلام قیمت تماس بگیرید",
          country: "ایران",
          state: "فارس",
          city: "شیراز",
          created_at: "1402-06-27",
          view: 11,
        },
        {
          id: 10,
          name: "محصول ثبت شده",
          person_type: "حقیقی",
          image: "1692719756.jpg",
          price: "برای استعلام قیمت تماس بگیرید",
          country: "ایران",
          state: "فارس",
          city: "شیراز",
          created_at: "1402-06-27",
          view: 11,
        }
      );
      setProducts(prev_products);
    }
  };
  const productsRender = () => {
    let elements = products.map((product) => {
      return <Product product={product} />;
    });
    return elements;
  };
  console.log(products);
  return (
    <>
      <View style={styles.headerContainer}>{productsRender()}</View>
      <View
        style={{
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "blue",
            padding: 10,
            width: 100,
            height: 50,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 15,
          }}
          onPress={() => {
            nextPage();
          }}
        >
          <Text
            style={{ fontFamily: "iran-sanse", fontSize: 17, color: "#fff" }}
          >
            بیشتر
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Products;

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
});
