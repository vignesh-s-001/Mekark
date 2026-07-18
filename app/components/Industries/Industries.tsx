"use client";
import { useEffect, useRef } from "react";
import styles from "./Industries.module.css";

const industries = [
  { icon: "🌐", title: "Global Logistics & Supply Chain", desc: "Built for scale, speed, and uninterrupted distribution flow." },
  { icon: "🏭", title: "Manufacturing & Industrial Enterprises", desc: "Aligned with production ecosystems and operational continuity." },
  { icon: "📦", title: "E-Commerce & Fulfillment Networks", desc: "Optimized for high-speed inventory movement and dispatch." },
  { icon: "🛒", title: "FMCG & Distribution Companies", desc: "Designed for high-frequency inventory handling and supply chains." },
  { icon: "⚙️", title: "Automotive & Heavy Engineering", desc: "Engineered for heavy loads and precision storage requirements." },
];

export default function Industries() {
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
    <section id="industries" ref={ref} className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            — Industries <em>We Serve</em> —
          </h2>
          <p className={styles.sub}>
            Executed within a controlled framework ensuring accountability and zero execution gaps.
          </p>
        </div>
        <div className={styles.grid}>
          {industries.map((ind, i) => (
            <div
              key={i}
              className={styles.card}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{ind.icon}</span>
              </div>
              <h3 className={styles.cardTitle}>{ind.title}</h3>
              <p className={styles.cardDesc}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width CTA Banner */}
      <div className={styles.bannerFull}>
        <div className={`container ${styles.bannerContainer}`}>
          <div className={styles.bannerText}>
            <p className={styles.bannerHeading}>Build with certainty. Execute without compromise.</p>
          </div>
          <button
            className={styles.bannerCta}
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            SCHEDULE A PROJECT DISCUSSION →
          </button>
        </div>
      </div>
    </section>
  );
}
