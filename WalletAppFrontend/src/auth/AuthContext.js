import React, { createContext, useState, useEffect } from "react";
import axiosClient from "../api/axiosClient";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const response = await axiosClient.get("/users/me");
        setUser(response.data);
      }
      setLoading(false);
    };
    loadUser();
  }, []);

  const login = async (username, password) => {
    const response = await axiosClient.post("/users/login", {
      username,
      password,
    });
    const { token, user } = response.data;
    await AsyncStorage.setItem("token", token);
    setUser(user);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
