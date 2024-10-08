import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const FirstScreen: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! Please select your role:</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="I am a Chef"
          onPress={() => navigation.navigate("ChefMenuScreen")}
        />
        <Button
          title="I am a Guest"
          onPress={() => navigation.navigate("CustomerMenuScreen")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
});

export default FirstScreen;
