import React, { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import axiosClient from "../api/axiosClient";

const AddTransactionScreen = ({ navigation }) => {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  const addTransaction = () => {
    axiosClient.post("/transactions", {
      walletId: 1,
      type: "send",
      amount: parseFloat(amount),
      category,
    });
    navigation.goBack();
  };

  return (
    <View>
      <Text>Add Transaction</Text>
      <TextInput
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        placeholder="Category (e.g., savings, food)"
        value={category}
        onChangeText={setCategory}
      />
      <Button title="Add" onPress={addTransaction} />
    </View>
  );
};

export default AddTransactionScreen;
