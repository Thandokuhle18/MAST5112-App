import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
}

const EditMenuScreen: React.FC = () => {
  const navigation = useNavigation();

  const [dishName, setDishName] = useState("");
  const [dishPrice, setDishPrice] = useState("");
  const [dishCategory, setDishCategory] = useState("");

  const handleSave = () => {
    // Logic to save the new dish, which can be added to the list
    // Could use AsyncStorage or an API to save the new menu item
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Edit Menu</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={dishPrice}
        onChangeText={setDishPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Category (Starter/Main/Dessert)"
        value={dishCategory}
        onChangeText={setDishCategory}
      />
      <Button title="Save" onPress={handleSave} />
      <Button
        title="Back"
        onPress={() => navigation.navigate("ChefMenuScreen")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 15,
    paddingLeft: 10,
  },
});

export default EditMenuScreen;
