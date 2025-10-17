"use client";
import { useSelector } from "react-redux";
import styles from "./page.module.css";
import Link from "next/link";

export default function Admin() {
  const feedbacks = useSelector((state) => state.feedback.feedbacks);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Your Feedbacks</h1>
        <Link href="/" passHref>
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
      {feedbacks.length === 0 ? (
        <p className={styles.emptyMessage}>No feedbacks yet.</p>
      ) : (
        <div className={styles.feedbackGrid}>
          {feedbacks.map((feedback, index) => (
            <div key={index} className={styles.feedbackCard}>
              <p>
                <strong>Name : </strong> {feedback.name}
              </p>
              <p>
                <strong>Email : </strong> {feedback.email}
              </p>
              <p>
                <strong>Phone : </strong> {feedback.phone}
              </p>
              <p>
                <strong>Message : </strong> {feedback.message}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
