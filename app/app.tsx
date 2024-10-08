import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ChefMenuScreen from "./ChefMenuScreen";
import EditMenuScreen from "./EditMenuScreen";
import { NavigationContainer } from "@react-navigation/native";

interface Dish {
  id: string;
  name: string;
  price: number;
  category: string;
}

// Define your stack's route parameters
type RootStackParamList = {
  ChefMenuScreen: undefined;
  EditMenuScreen: { addDish: (newDish: Dish) => void };
};

// Create a stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ChefMenuScreen"
          component={ChefMenuScreen}
          options={{ title: "Chef's Menu" }}
        />
        <Stack.Screen
          name="EditMenuScreen"
          component={EditMenuScreen}
          options={{ title: "Edit Menu" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
