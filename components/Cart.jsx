import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

const initialCartItems = [
  { id: "1", name: "Margherita Pizza", price: 8.99, quantity: 1 },
  { id: "2", name: "Chicken Caesar Salad", price: 9.99, quantity: 1 },
  { id: "3", name: "Beef Burger", price: 7.99, quantity: 1 },
];

export default function Cart({ navigation }) {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const calculateTotal = () => {
    return cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const handleCheckout = () => {
    navigation.navigate("Success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <View style={styles.priceContainer}>
              <Text style={styles.itemPrice}>
                ${(item.price * item.quantity).toFixed(2)}
              </Text>
              <View style={styles.quantityContainer}>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => decrementQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{item.quantity}</Text>
                <TouchableOpacity
                  style={styles.quantityButton}
                  onPress={() => incrementQuantity(item.id)}
                >
                  <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={handleCheckout}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#ff6347",
    textAlign: "center",
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    flex: 1,
  },
  itemPrice: {
    fontSize: 18,
    color: "#333",
    fontWeight: "bold",
    marginBottom: 5,
  },
  priceContainer: {
    alignItems: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    backgroundColor: "#ff6347",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  quantity: {
    fontSize: 18,
  },
  totalContainer: {
    marginTop: 20,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  totalText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#ff6347",
  },
  checkoutButton: {
    backgroundColor: "#ff6347",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: "center",
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
