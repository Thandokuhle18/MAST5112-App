import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";

interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
}

const CustomerMenuScreen: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [menuItems, setMenuItems] = useState<Dish[]>([
    { id: "1", name: "Starter Dish", price: 50, category: "Starter" },
    { id: "2", name: "Main Dish", price: 100, category: "Main" },
    { id: "3", name: "Dessert", price: 40, category: "Dessert" },
  ]);

  const filteredItems = filter
    ? menuItems.filter((item) => item.category === filter)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Customer Menu</Text>
      <View style={styles.buttonContainer}>
        <Button title="Show Starters" onPress={() => setFilter("Starter")} />
        <Button title="Show Mains" onPress={() => setFilter("Main")} />
        <Button title="Show Desserts" onPress={() => setFilter("Dessert")} />
      </View>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text>
              {item.name} - R{item.price}
            </Text>
          </View>
        )}
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default CustomerMenuScreen;
