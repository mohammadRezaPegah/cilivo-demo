import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Stories = () => {
  const datas = [
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
    {
      image: "https://cilivo.ir/stories/1695199708.jpg",
      title: "سیلیوو",
    },
  ];
  return (
    <>
      <View style={[styles.StoryContainer, styles.RTLContainer]}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.storyView} key="0">
            <View style={styles.addStoryImageParent}>
              <Image
                source={require("../../assets/stories/team.jpg")}
                style={styles.storyImage}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 0,
                  end: 0,
                  backgroundColor: "#fff",
                  borderRadius: 50,
                  borderColor: "#fff",
                  borderWidth: 1.5,
                }}
              >
                <AntDesign
                  name="pluscircle"
                  size={24}
                  color="rgb(142, 140, 140)"
                />
              </View>
            </View>
          </View>
          {datas.map((data, index) => {
            return (
              <View style={styles.storyView} key={index}>
                <View style={styles.storyImageParent}>
                  <Image
                    source={require("../../assets/stories/story.jpg")}
                    style={styles.storyImage}
                  />
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Stories;

const styles = StyleSheet.create({
  StoryContainer: {
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: 10,
    flexDirection: "row-reverse",
    marginHorizontal: 20,
  },
  elevation: {
    elevation: 10,
    shadowColor: "#52006A",
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    borderColor: "#fff",
    borderWidth: 2,
    resizeMode: "contain",
  },
  storyView: {
    marginHorizontal: 2,
  },
  storyImageParent: {
    borderRadius: 50,
    borderColor: "pink",
    borderWidth: 2,
  },
  addStoryImageParent: {
    borderRadius: 50,
  },
  storyTitle: {
    fontSize: 10,
    textAlign: "center",
  },
  LTRContainer: {
    flexDirection: "row-reverse",
  },

  RTLContainer: {
    flexDirection: "row",
  },
});
