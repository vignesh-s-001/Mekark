"use client";
import { useEffect, useRef } from "react";
import styles from "./WhyDifferent.module.css";

const cards = [
  {
    side: "left",
    eyebrow: "USP — UNIQUE STRENGTH",
    title: "Execution Driven by Manufacturing Control",
    body: "Mekark operates on a fully owned production backbone — where every component is fabricated within a controlled environment. This ensures speed without compromise, precision without variability, and consistency at scale.",
    bg: "dark",
  },
  {
    side: "right",
    eyebrow: "ISP — INTELLIGENT SELLING PROPOSITION",
    title: "Predictability, Engineered Into Delivery",
    body: "With capacity-backed production and integrated execution, Mekark eliminates uncertainty across timelines and quality. What you plan is what gets delivered — measurable, consistent, and on schedule.",
    bg: "red",
  },
];

export default function WhyDifferent() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="why-different" ref={ref} className={styles.section}>
      {/* Top area with red dotted background */}
      <div className={styles.topArea}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>
              - Why <em>Mekark</em> Is Different -
            </h2>
          </div>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div
              key={i}
              className={`${styles.card} ${c.bg === "red" ? styles.cardRed : styles.cardDark}`}
            >
              <p className={styles.eyebrow}>{c.eyebrow}</p>
              <h3 className={styles.cardTitle}>{c.title}</h3>
              <p className={styles.cardBody}>{c.body}</p>
            </div>
          ))}
        </div>

        {/* Scale Banner */}
        <div className={styles.scaleBanner}>
          <p className={styles.scaleText}>
            When scale matters, execution cannot fail.
          </p>
          <button
            className={styles.scaleCta}
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            TALK TO OUR ENGINEERING TEAM →
          </button>
        </div>
      </div>
    </section>
  );
}
