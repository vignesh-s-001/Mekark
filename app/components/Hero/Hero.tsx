"use client";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Background image */}
      <div className={styles.bg}>
        <Image
          src="/assets/Homepage-warehouse image.png"
          alt="Warehouse construction site"
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center 60%", }}
        />
        {/* Left-side gradient overlay for text legibility */}
        <div className={styles.overlay} />
      </div>

      {/* Bottom-right dark corner accent — matches Figma design */}
      <div className={styles.cornerDark} />

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.text}>

          {/* Headline */}
          <h1 className={styles.headline}>
            <span className={styles.line1}>Warehouse Contractors</span>
            {/* Red strip — single line, fades to transparent on right */}
            <span className={styles.line2}>Built for Execution Certainty</span>
          </h1>

          {/* Sub text */}
          <p className={styles.sub}>
            Capacity-backed delivery. Precision-built structures.<br />
            No delays. No deviations.
          </p>

          {/* Inline stat badges & CTA combined block */}
          <div className={styles.ctaWrapper}>
            <div className={styles.badges}>
              <span className={styles.badge}>6 Lakh Sq.Ft Facility</span>
              <span className={styles.badge}>3000 Tons / Month</span>
              <span className={styles.badge}>ISO Certified</span>
            </div>

            <button
              id="hero-consult-btn"
              className={styles.btnRed}
              onClick={() => scrollTo("#consultation")}
            >
              REQUEST PROJECT CONSULTATION
            </button>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className={styles.ticker}>
        <div className={styles.tickerInner}>
          {[
            "END-TO-END CONTRACTING",
            "DESIGN-INTEGRATED EXECUTION",
            "TURNKEY DELIVERY",
            "HIGH-LOAD STRUCTURES",
            "FAST-TRACK PROGRAMS",
            "ISO CERTIFIED",
            "3000 TONS / MONTH",
          ].map((t, i) => (
            <span key={i} className={styles.tickerItem}>
              <span className={styles.tickerDiamond}>◆</span>
              {t}
            </span>
          ))}
          {[
            "END-TO-END CONTRACTING",
            "DESIGN-INTEGRATED EXECUTION",
            "TURNKEY DELIVERY",
            "HIGH-LOAD STRUCTURES",
            "FAST-TRACK PROGRAMS",
            "ISO CERTIFIED",
            "3000 TONS / MONTH",
          ].map((t, i) => (
            <span key={`b${i}`} className={styles.tickerItem}>
              <span className={styles.tickerDiamond}>◆</span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
