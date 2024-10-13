import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const menuItems = [
  { id: "1", name: "Margherita Pizza", price: "$8.99" },
  { id: "2", name: "Chicken Caesar Salad", price: "$9.99" },
  { id: "3", name: "Beef Burger", price: "$7.99" },
  { id: "4", name: "Sushi Platter", price: "$14.99" },
  { id: "5", name: "Chocolate Brownie", price: "$4.99" },
  { id: "6", name: "Spaghetti Bolognese", price: "$11.99" },
  { id: "7", name: "Grilled Salmon", price: "$17.99" },
  { id: "8", name: "Greek Salad", price: "$6.99" },
  { id: "9", name: "Pepperoni Pizza", price: "$9.99" },
  { id: "10", name: "Tandoori Chicken", price: "$12.99" },
  { id: "11", name: "Pancake Stack", price: "$5.99" },
  { id: "12", name: "Chicken Alfredo Pasta", price: "$13.99" },
  { id: "13", name: "Buffalo Wings", price: "$8.49" },
  { id: "14", name: "Avocado Toast", price: "$6.49" },
  { id: "15", name: "French Fries", price: "$2.99" },
];

export default function Menu({ navigation }) {
  const addedToCart = () => {
    navigation.navigate("Cart");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Our Menu</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <View>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>{item.price}</Text>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={addedToCart}>
                <Text style={styles.buttonText}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 60,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff6347",
    textAlign: "center",
  },
  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  itemName: {
    fontSize: 18,
    color: "#333",
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  button: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
