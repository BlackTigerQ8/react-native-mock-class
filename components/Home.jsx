import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import FoodImage from "../assets/images/food_image.png";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Food App</Text>
      <Image source={FoodImage} style={styles.image} />
      <Text style={styles.subtitle}>Discover Delicious Food</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Go to Menu</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff6347",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: "#444",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
