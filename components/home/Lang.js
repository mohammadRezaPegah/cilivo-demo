import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { Entypo } from "@expo/vector-icons";

export default function Lang() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "English", value: "English" },
    { label: "العربی", value: "Arabic" },
    { label: "فارسی", value: "Persian" },
  ]);
  useEffect(() => {
    setValue("Persian");
  }, []);
  return (
    <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      placeholder={<Entypo name="language" size={20} color="black" />}
      style={{ width: 120, height: 50 }}
    />
  );
}
