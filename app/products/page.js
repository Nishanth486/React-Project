"use client";
import Link from "next/link";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

const products = [
  {
    id: 1,
    name: "Wireless Headphone",
    price: "₹ 1299.00",
    imageUrl: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2024/12/sony-headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "₹ 1899.00",
    imageUrl: "https://www.androidauthority.com/wp-content/uploads/2023/10/google-pixel-watch-2-display.jpg",
  },
  {
    id: 3,
    name: "Coffee Maker",
    price: "₹ 2699.00",
    imageUrl: "https://media.sketchfab.com/models/b6fc16209f5e4c078afe978651366226/thumbnails/5fea2677743547a3b141f72f1d611a4f/2a84f1b81a464f5db469d0aabb36dc4c.jpeg",
  },
];

export default function Products() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Products</h1>
        <Link href="/" passHref>
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
      <div className={styles.grid}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.imageUrl}
              alt={product.name}
              className={styles.image}
            />
            <div className={styles.cardContent}>
              <h2 className={styles.productName}>{product.name}</h2>
              <p className={styles.price}>{product.price}</p>
              <button
                className={styles.addToCartButton}
                onClick={() => {handleAddToCart(product);
                  alert("Product added to cart!")
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
