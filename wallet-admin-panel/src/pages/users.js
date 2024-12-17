import React, { useEffect, useState } from "react";
import UserTable from "../components/UserTable";
import axiosClient from "../api/axiosClient";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axiosClient.get("/users").then((res) => setUsers(res.data));
  }, []);

  const toggleStatus = async (id, isActive) => {
    await axiosClient.put(`/users/${id}`, { isActive: !isActive });
    const updatedUsers = users.map((u) =>
      u.id === id ? { ...u, isActive: !isActive } : u
    );
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>Manage Users</h1>
      <UserTable users={users} onToggleStatus={toggleStatus} />
    </div>
  );
};

export default Users;
