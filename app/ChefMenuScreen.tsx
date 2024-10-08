import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

interface Dish {
  id: string;
  name: string;
  price: number;
}

// Define the navigation types
type RootStackParamList = {
  EditMenuScreen: { addDish: (newDish: Dish) => void };
  FirstScreen: undefined;
};

const ChefMenuScreen: React.FC = () => {
  // Use typed navigation for better TypeScript support
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Initialize menu items with state
  const [menuItems, setMenuItems] = useState<Dish[]>([
    { id: "1", name: "Starter Dish", price: 50 },
    { id: "2", name: "Main Dish", price: 100 },
    { id: "3", name: "Dessert", price: 40 },
  ]);

  // Function to handle adding a new dish
  const addDish = (newDish: Dish) => {
    setMenuItems((prevItems) => [...prevItems, newDish]);
  };

  // Calculate total number of menu items
  const totalItems = menuItems.length;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chef's Menu</Text>
      <Text style={styles.total}>Total Menu Items: {totalItems}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>
              {item.name} - R{item.price}
            </Text>
          </View>
        )}
      />
      <Button
        title="Edit Menu"
        onPress={() => navigation.navigate("EditMenuScreen", { addDish })}
      />
      <Button title="Back" onPress={() => navigation.navigate("FirstScreen")} />
    </View>
  );
};

// Define styles for the component
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
  total: {
    fontSize: 16,
    marginBottom: 10,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ChefMenuScreen;
