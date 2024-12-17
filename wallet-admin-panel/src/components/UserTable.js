import React from "react";

const UserTable = ({ users, onToggleStatus }) => {
  return (
    <table border="1" style={styles.table}>
      <thead>
        <tr>
          <th>ID</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.isActive ? "Active" : "Inactive"}</td>
            <td>
              <button onClick={() => onToggleStatus(user.id, user.isActive)}>
                {user.isActive ? "Deactivate" : "Activate"}
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

export default UserTable;
