import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TransactionItem = ({ transaction }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.type}>
        {transaction.type === "send" ? "Sent" : "Received"}
      </Text>
      <Text style={styles.amount}>₹{transaction.amount}</Text>
      <Text style={styles.category}>{transaction.category}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "#f9f9f9",
  },
  type: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  amount: {
    fontSize: 18,
    color: "#28a745",
  },
  category: {
    fontSize: 14,
    color: "#555",
  },
});

export default TransactionItem;
