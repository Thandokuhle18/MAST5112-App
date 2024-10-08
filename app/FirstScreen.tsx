import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

// Define your stack's route parameters (optional but recommended for TypeScript)
type RootStackParamList = {
  ChefMenuScreen: undefined;
  CustomerMenuScreen: undefined;
};

const FirstScreen: React.FC = () => {
  // Use typed navigation prop for better TypeScript support
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please select your role:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="I am a Chef"
          onPress={() => navigation.navigate("ChefMenuScreen")}
        />
        <View style={styles.spacer} />{" "}
        {/* Add some space between the buttons */}
        <Button
          title="I am a Guest"
          onPress={() => navigation.navigate("CustomerMenuScreen")}
        />
      </View>
    </View>
  );
};

// Define styles for the component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20, // Add padding to ensure the content doesn't touch screen edges
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
    textAlign: "center", // Center the title text
  },
  buttonContainer: {
    flexDirection: "column", // Stack buttons vertically
    justifyContent: "center",
    alignItems: "center",
    width: "80%", // Adjust width for better button layout
  },
  spacer: {
    height: 20, // Space between the two buttons
  },
});

export default FirstScreen;
