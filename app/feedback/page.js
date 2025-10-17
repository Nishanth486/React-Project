"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./page.module.css";
import { useDispatch } from "react-redux";
import { addFeedback } from "../store/feedbackSlice";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addFeedback(formData));
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Feedback Form</h1>
        <Link href="/" passHref>
          <button className={styles.backButton}>Back to Home</button>
        </Link>
      </div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.input}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className={styles.textarea}
        />
        <button type="submit" className={styles.submitButton}>
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
