"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.css";
import Link from "next/link";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div className={styles.container}>
      <div className="header">
        <h1 className={styles.title}>Your Cart</h1>
        <Link href="/" passHref>
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
      {cartItems.length === 0 ? (
        <p className={styles.emptyMessage}>Your cart is empty.</p>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
