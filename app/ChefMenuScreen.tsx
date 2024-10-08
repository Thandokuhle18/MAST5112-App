import React, { useState } from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Dish {
  id: string;
  name: string;
  price: number;
}

const ChefMenuScreen: React.FC = () => {
  const navigation = useNavigation();

  const [menuItems, setMenuItems] = useState<Dish[]>([
    { id: "1", name: "Starter Dish", price: 50 },
    { id: "2", name: "Main Dish", price: 100 },
    { id: "3", name: "Dessert", price: 40 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Chef's Menu</Text>
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
        onPress={() => navigation.navigate("EditMenuScreen")}
      />
      <Button title="Back" onPress={() => navigation.navigate("FirstScreen")} />
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
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default ChefMenuScreen;
