import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <h2>Admin Panel</h2>
      <ul style={styles.navLinks}>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/wallets">Wallets</Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#333",
    padding: "10px 20px",
    color: "#fff",
  },
  navLinks: {
    display: "flex",
    listStyle: "none",
    gap: "15px",
  },
};

export default Navbar;
