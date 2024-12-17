import React, { useContext, useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import axiosClient from "../api/axiosClient";
import { AuthContext } from "../auth/AuthContext";

const HomeScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);
  const [balance, setBalance] = useState(0);

  useEffect(() => {
    axiosClient.get("/wallets").then((res) => setBalance(res.data[0]?.balance));
  }, []);

  return (
    <View>
      <Text>Wallet Balance: ₹{balance}</Text>
      <Button
        title="View Transactions"
        onPress={() => navigation.navigate("Transactions")}
      />
      <Button
        title="Add Transaction"
        onPress={() => navigation.navigate("AddTransaction")}
      />
      <Button title="Logout" onPress={logout} />
    </View>
  );
};

export default HomeScreen;
