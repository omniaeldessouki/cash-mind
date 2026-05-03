// components/Testimonials.js
"use client";
import { useState } from "react";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Ahmed Mansour",
      role: "Software Engineer",
      image: "👨‍💻",
      text: "Cash Mind completely changed how I track my money. I saved 30% more in just 3 months!",
      rating: 5,
      date: "March 2024"
    },
    {
      name: "Sara Khalil",
      role: "Marketing Manager",
      image: "👩‍💼",
      text: "The weekly reports are amazing. I finally understand where my money goes every month.",
      rating: 5,
      date: "February 2024"
    },
    {
      name: "Mohamed Ali",
      role: "Freelancer",
      image: "👨‍🎨",
      text: "Best expense tracker I've ever used. Simple, fast, and the insights are super helpful!",
      rating: 5,
      date: "January 2024"
    },
    {
      name: "Nour Hassan",
      role: "Student",
      image: "👩‍🎓",
      text: "As a student, managing budget is crucial. Cash Mind helps me stay on track with my spending.",
      rating: 4,
      date: "December 2023"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.badge}>Testimonials</span>
          <h2>What Our Users Say</h2>
          <p>Join thousands of satisfied users who transformed their financial habits</p>
        </div>

        <div className={styles.slider}>
          <button className={styles.prevBtn} onClick={prevSlide}>←</button>
          
          <div className={styles.slideContainer}>
            <div 
              className={styles.slide}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.rating}>
                    {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
                  </div>
                  <p className={styles.text}>"{testimonial.text}"</p>
                  <div className={styles.user}>
                    <div className={styles.avatar}>{testimonial.image}</div>
                    <div>
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.role}</p>
                    </div>
                  </div>
                  <div className={styles.date}>{testimonial.date}</div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.nextBtn} onClick={nextSlide}>→</button>
        </div>

        <div className={styles.dots}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${currentIndex === index ? styles.active : ""}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}