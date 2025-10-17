import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Our Store
      </h1>
      <p className={styles.description}>
        Discover a world of quality products, curated just for you. We believe in providing the best, from our products to our service. Explore our collection and find what you love.
      </p>
      <Link href="/products" passHref>
        <button className={styles.button}>
          Explore Products
        </button>
      </Link>
    </div>
  );
}
