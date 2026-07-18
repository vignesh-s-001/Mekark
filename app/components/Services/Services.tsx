"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const services = [
  {
    num: "01",
    title: "End-to-End Warehouse Contracting",
    desc: "Executed within a controlled framework ensuring accountability and zero execution gaps.",
  },
  {
    num: "02",
    title: "Design-Integrated Warehouse Execution",
    desc: "Aligning structural design with execution to eliminate revisions and reduce uncertainty.",
  },
  {
    num: "03",
    title: "Turnkey Warehouse Delivery",
    desc: "Single-point responsibility from planning to completion—fully operational delivery.",
  },
  {
    num: "04",
    title: "High-Load Industrial Warehouse Structures",
    desc: "Built for demanding environments requiring durability and structural performance.",
  },
  {
    num: "05",
    title: "Logistics & Distribution Warehouse Infrastructure",
    desc: "Designed for throughput efficiency and seamless operational flow",
  },
  {
    num: "06",
    title: "Fast-Track Warehouse Construction Programs",
    desc: "Accelerated execution enabled by in-house manufacturing capacity.",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className={styles.section}>
      
      {/* Top Red Banner */}
      <div className={styles.topBanner}>
        <div className={`container ${styles.bannerInner}`}>
          <h2 className={styles.bannerTitle}>
            Execution control begins with<br/>manufacturing strength.
          </h2>
          <button className={styles.bannerBtn}>
            SCHEDULE A TECHNICAL CONSULTATION &rarr;
          </button>
        </div>
      </div>

      {/* Overlapping Workers Image area with isolated background */}
      <div className={styles.heroImageSection}>
        <div className={styles.heroBg}>
          <Image
            src="/assets/our services page - background image.png"
            alt="Services Background"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
          <div className={styles.heroBgGradient} />
        </div>

        <div className={styles.workersWrap}>
          <Image
            src="/assets/our services page - workers png.png"
            alt="Mekark workers"
            width={600}
            height={400}
            style={{ objectFit: "contain", width: "100%", height: "auto" }}
          />
        </div>
      </div>

      {/* Main Content (Dark Theme) */}
      <div className={styles.mainContent}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>— Our <em>Services</em> —</h2>
          </div>

          <div className={styles.grid}>
            {services.map((s, i) => (
              <div
                key={s.num}
                className={`${styles.card} ${s.num === "06" ? styles.cardHighlight : ""}`}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <span className={styles.cardNum}>{s.num}</span>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
