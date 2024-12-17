import React, { useEffect, useState } from "react";
import WalletTable from "../components/WalletTable";
import axiosClient from "../api/axiosClient";

const Wallets = () => {
  const [wallets, setWallets] = useState([]);

  useEffect(() => {
    axiosClient.get("/wallets").then((res) => setWallets(res.data));
  }, []);

  const toggleStatus = async (id, isFrozen) => {
    await axiosClient.put(`/wallets/${id}`, { isFrozen: !isFrozen });
    const updatedWallets = wallets.map((w) =>
      w.id === id ? { ...w, isFrozen: !isFrozen } : w
    );
    setWallets(updatedWallets);
  };

  return (
    <div>
      <h1>Manage Wallets</h1>
      <WalletTable wallets={wallets} onToggleStatus={toggleStatus} />
    </div>
  );
};

export default Wallets;
