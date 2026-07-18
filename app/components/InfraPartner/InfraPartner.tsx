"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./InfraPartner.module.css";

const features = [
  { num: "01", label: "6 Lakh Sq.Ft Integrated Facility" },
  { num: "02", label: "3000 Tons Monthly Capacity" },
  { num: "03", label: "Advanced Automated Machinery" },
  { num: "04", label: "ISO-Certified Systems" },
  { num: "05", label: "Proven Large-Scale Execution" },
  { num: "06", label: "Zero External Dependency" },
];

const builtFeatures = [
  { icon: "🏗️", title: "6 Lakh Sq.Ft Integrated Manufacturing Facility", desc: "Supports parallel execution of multiple large-scale warehouse projects." },
  { icon: "⚙️", title: "3000 Tons Monthly Production Capacity", desc: "Enables high-volume output aligned with aggressive timelines." },
  { icon: "🤖", title: "Advanced Automated Machinery", desc: "Ensures fabrication accuracy and repeatable quality at scale." },
  { icon: "🌿", title: "Green Certified Manufacturing Practices", desc: "Aligned with modern industrial sustainability standards." },
];

const slides = [
  { src: "/assets/manafacturing -right slide show - 1.jpg", label: "Automated machinery in operation" },
  { src: "/assets/manafacturing -right slide show - 2.jpg", label: "High-volume production facility" },
  { src: "/assets/manafacturing -right slide show - 3.jpg", label: "Precision fabrication at scale" },
  { src: "/assets/manafacturing -right slide show - 4.png", label: "Sustainable operations" },
];

export default function InfraPartner() {
  const ref = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── A Long-Term Infrastructure Partner ── */}
      <section ref={ref} className={styles.partnerSection}>
        <div className={`container ${styles.partnerInner}`}>
          <div className={styles.partnerHeader}>
            <p className={styles.partnerEyebrow}>— WHY TOP INDUSTRIES CHOOSE MEKARK</p>
            <h2 className={styles.partnerTitle}>
              A Long-Term <em>Infrastructure Partner</em>
            </h2>
            <p className={styles.partnerSub}>
              Mekark is a long-term infrastructure partner for enterprise growth.
            </p>
          </div>
          <div className={styles.featureGrid}>
            {features.map((f, i) => (
              <div key={i} className={styles.featureItem}>
                <span className={styles.featureNum}>{f.num}</span>
                <span className={styles.featureLabel}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Built for Scale. Engineered for Control. ── */}
      <section className={styles.builtSection}>
        <div className="container">
          <div className={styles.builtHeader}>
            <p className={styles.builtEyebrow}>— MANUFACTURING UNIT / FACTORY</p>
            <h2 className={styles.builtTitle}>
              Built for Scale.<em>Engineered for Control.</em>
            </h2>
            <p className={styles.builtSub}>
              Mekark's manufacturing ecosystem eliminates execution uncertainty by bringing scale, precision, and production control under one roof.
            </p>
          </div>
          <div className={styles.builtGrid}>
            {/* Left */}
            <div className={styles.builtList}>
              {builtFeatures.map((f, i) => (
                <div key={i} className={styles.builtCard}>
                  <span className={styles.builtCardIcon}>{f.icon}</span>
                  <div className={styles.builtCardText}>
                    <h4 className={styles.builtCardTitle}>{f.title}</h4>
                    <p className={styles.builtCardDesc}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Right – Slideshow Image */}
            <div className={styles.builtImageWrap}>
              {slides.map((s, i) => (
                <div
                  key={i}
                  className={`${styles.slide} ${i === currentSlide ? styles.activeSlide : ''}`}
                >
                  <Image src={s.src} alt={s.label} fill style={{ objectFit: "cover" }} />
                  <div className={styles.slideOverlay} />
                  <div className={styles.slideLabelWrap}>
                    <p className={styles.slideLabel}>{s.label}</p>
                  </div>
                </div>
              ))}
              <div className={styles.slideProgressIndicator} />
            </div>
          </div>
        </div>
      </section>

      {/* ── Where infrastructure is built banner ── */}
      <section className={styles.preBuildBanner}>
        <div className={`container ${styles.preBuildInner}`}>
          <p className={styles.preBuildText}>
            Where infrastructure is built before it reaches your site.
          </p>
          <button
            className={styles.preBuildCta}
            onClick={() => document.querySelector("#consultation")?.scrollIntoView({ behavior: "smooth" })}
          >
            BOOK A PROJECT WALKTHROUGH →
          </button>
        </div>
      </section>
    </>
  );
}
