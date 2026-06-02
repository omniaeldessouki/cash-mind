"use client"; // Required for Next.js App Router
import styles from "./StepsSection.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function StepsSection() {
 const steps = [
  { number: "01", title: "Create Your Account", desc: "Sign up in 30 seconds - it's completely free", icon: "📝" },
  { number: "02", title: "Add Your Expenses", desc: "Log every purchase you make daily, weekly, or monthly", icon: "💰" },
  { number: "03", title: "Track & Analyze", desc: "See where your money goes with smart analytics", icon: "📊" },
  { number: "04", title: "Set Financial Goals", desc: "Define saving targets and budget limits", icon: "🎯" },
  { number: "05", title: "Monitor Progress", desc: "Track your spending habits in real-time", icon: "📈" },
  { number: "06", title: "Save More Money", desc: "Get personalized tips to reduce unnecessary spending", icon: "💸" },
];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className={styles.steps}>
      <div className={styles.container}>
        <h2>How It <span className={styles.highlight}>Works</span></h2>
        <p>Four simple steps to take control of your finances</p>
        <Slider {...settings}>
          {steps.map((step, i) => (
            <div key={i}>
              <div className={styles.stepCard}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepIcon}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}