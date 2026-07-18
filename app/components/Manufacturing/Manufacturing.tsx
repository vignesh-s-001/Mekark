"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import styles from "./Manufacturing.module.css";

const slides = [
  "/assets/manafacturing -right slide show - 1.jpg",
  "/assets/manafacturing -right slide show - 2.jpg",
  "/assets/manafacturing -right slide show - 3.jpg",
  "/assets/manafacturing -right slide show - 4.png",
];

export default function Manufacturing() {
  const [active, setActive] = useState(0);
  const ref = useRef<HTMLElement>(null);

  // Auto-rotate slides
  useEffect(() => {
    const t = setInterval(() => {
      setActive((a) => (a + 1) % slides.length);
    }, 3500);
    return () => clearInterval(t);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="manufacturing" ref={ref} className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {/* Left */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>EXECUTION CONTROL</p>
          <h2 className={styles.title}>
            Execution control begins with{" "}
            <em>manufacturing strength.</em>
          </h2>
          <p className={styles.body}>
            Unlike conventional contractors, Mekark controls the full supply chain.
            Our integrated manufacturing unit means zero dependency on external vendors,
            consistent quality, and delivery timelines that don't slip.
          </p>
          <button
            className={styles.cta}
            onClick={() => {
              document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            SCHEDULE A TECHNICAL CONSULTATION →
          </button>
        </div>

        {/* Right – Slideshow */}
        <div className={styles.slideshow}>
          {slides.map((src, i) => (
            <div
              key={i}
              className={`${styles.slide} ${i === active ? styles.activeSlide : ""}`}
            >
              <Image
                src={src}
                alt={`Manufacturing facility ${i + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
          {/* Dots */}
          <div className={styles.dots}>
            {slides.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === active ? styles.activeDot : ""}`}
                onClick={() => setActive(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
