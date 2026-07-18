"use client";
import Image from "next/image";
import styles from "./About.module.css";
import { useEffect, useRef } from "react";

const stats = [
  { value: "15+", label: "Years of Experience" },
  { value: "5L+", label: "Sq. ft. Manufacturing Facility" },
  { value: "3000+", label: "Tonnes Monthly Production Capacity" },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add(styles.visible);
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className={styles.section} ref={ref}>
      <div className={`container ${styles.grid}`}>
        {/* Left – Image */}
        <div className={styles.imageWrap}>
          <Image
            src="/assets/About Page - left side image.png"
            alt="Mekark facility"
            width={520}
            height={440}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />

          <div className={styles.imageOverlay} />

          <div className={styles.centerLogo}>
            <Image src="/assets/About Page - Black Logo.png" alt="Mekark" width={260} height={60} style={{ objectFit: "contain" }} />
          </div>

          <div className={styles.imageTextWrap}>
            <p className={styles.imageTextLine1}>For enterprise clients, this means one thing:</p>
            <p className={styles.imageTextLine2}>predictable delivery, engineered with certainty</p>
          </div>

          <div className={styles.statBadge}>
            <span className={styles.badgeNum}>15+</span>
            <span className={styles.badgeLabel}>Years Of<br />Excellence</span>
          </div>
        </div>

        {/* Right – Content */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            — About <em>Mekark</em> —
          </h2>
          <p className={styles.body}>
            Mekark specialises in the intersection of engineering discipline and execution control. We are
            not a construction-only contractor — we are a <strong>manufacturing-driven infrastructure partner.</strong>
          </p>
          <p className={styles.body}>
            With a fully integrated manufacturing facility and 3000 tonnes monthly production capacity,
            every component we use is manufactured with precision in our own facility. This means
            <strong> faster timelines, zero tolerance surprises, and delivery-grade guaranteed.</strong>
          </p>
          <p className={styles.body}>
            We hold a 6-Lakh Sq. ft. integrated manufacturing facility and 3000 tons monthly production
            capacity. Our factory-controlled standards mean your project isn't left to chance.
            <strong> ISO certified, semi-automated machining, and zero-compromise delivery.</strong>
          </p>

          {/* Stats */}
          {/* <div className={styles.stats}>
            {stats.map((s) => (
              <div key={s.value} className={styles.statItem}>
                <span className={styles.statNum}>{s.value}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ marginTop: "40px" }}>
            EXECUTION CONTROL
          </button> */}
        </div>
      </div>
    </section>
  );
}
