"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote:
      "Execution discipline was exceptional. Timelines were met without deviation. Mekark's integrated model removed all uncertainty from our project.",
    role: "Operations Head",
    company: "Leading Logistics Firm, Mumbai",
    name: "GURU",
    img: "/assets/testimonals- left guru.jpg",
  },
  {
    quote:
      "In-house capability removed all coordination risks. Delivery was precise & predictable. Exactly what we needed for a mission-critical timeline.",
    role: "Project Director",
    company: "Industrial Enterprise, Chennai",
    name: "RANJITH",
    img: "/assets/testimonals - right  ranjith.jpg",
  },
];

export default function Testimonials() {
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
    <section ref={ref} className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>— CLIENT TESTIMONIALS —</p>
          <h2 className={styles.title}>
            What Our <em>Clients Say</em>
          </h2>
        </div>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              {/* Top: quote text + floating image */}
              <div className={styles.cardTop}>
                <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
                <div className={styles.imgWrap}>
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                  <p className={styles.imgName}>{t.name}</p>
                </div>
              </div>
              {/* Bottom: divider + name */}
              <div className={styles.divider} />
              <div className={styles.personInfo}>
                <p className={styles.role}>{t.role}</p>
                <p className={styles.company}>{t.company}</p>
              </div>
              {/* Quote mark decoration */}
              <div className={styles.quoteDecor}>&ldquo;</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
