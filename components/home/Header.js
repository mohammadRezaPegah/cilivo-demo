import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Lang from "./Lang";

const Header = () => {
  return (
    <>
      <View style={styles.headerContainer}>
        <View style={styles.iconsContainer}>
          <Lang />
        </View>
        <TouchableOpacity>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.headerLogo}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  headerLogo: {
    flex: 1,
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconsContainer: {
    flex: 1,
    flexDirection: "row",
  },
});
