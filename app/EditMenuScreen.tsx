import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { NavigationProp, RouteProp } from "@react-navigation/native";
import { Picker } from "@react-native-picker/picker";

// Define the Dish interface
interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
}

// Define the stack parameters
type RootStackParamList = {
  ChefMenuScreen: undefined;
  EditMenuScreen: { addDish: (newDish: Dish) => void };
};

// Define the props for EditMenuScreen
type EditMenuScreenProps = {
  navigation: NavigationProp<RootStackParamList, "EditMenuScreen">;
  route: RouteProp<RootStackParamList, "EditMenuScreen">;
};

// Ensure EditMenuScreen is correctly defined
const EditMenuScreen: React.FC<EditMenuScreenProps> = ({
  navigation,
  route,
}) => {
  const { addDish } = route.params;

  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [course, setCourse] = useState("Starters");
  const [price, setPrice] = useState("");

  const handleSave = () => {
    const newDish: Dish = {
      id: Math.random().toString(),
      name: dishName,
      price: parseFloat(price),
      category: course,
    };

    addDish(newDish);
    navigation.navigate("ChefMenuScreen");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add Menu Item</Text>
      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <Picker
        selectedValue={course}
        onValueChange={(itemValue: string) => setCourse(itemValue)}
        style={styles.picker}
      >
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Mains" value="Mains" />
        <Picker.Item label="Desserts" value="Desserts" />
      </Picker>
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
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
  picker: {
    height: 50,
    width: "100%",
    marginBottom: 15,
  },
});

export default EditMenuScreen;
