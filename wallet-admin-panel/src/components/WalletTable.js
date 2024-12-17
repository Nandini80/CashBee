import React from "react";

const WalletTable = ({ wallets, onToggleStatus }) => {
  return (
    <table border="1" style={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Balance</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {wallets.map((wallet) => (
          <tr key={wallet.id}>
            <td>{wallet.id}</td>
            <td>₹{wallet.balance}</td>
            <td>{wallet.isFrozen ? "Frozen" : "Active"}</td>
            <td>
              <button onClick={() => onToggleStatus(wallet.id, wallet.isFrozen)}>
                {wallet.isFrozen ? "Unfreeze" : "Freeze"}
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
  },
};

export default WalletTable;
