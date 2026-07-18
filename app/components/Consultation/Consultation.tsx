"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Consultation.module.css";

export default function Consultation() {
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
    <section id="consultation" ref={ref} className={styles.section}>
      {/* Background */}
      <div className={styles.bg}>
        <Image
          src="/assets/last page -FAQ - requset for consultation background.png"
          alt="Consultation background"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={`container ${styles.inner}`}>
        <p className={styles.eyebrow}>— START YOUR PROJECT —</p>
        <h2 className={styles.title}>
          Define <em>Operational Efficiency.</em>
        </h2>

        <div className={styles.ctaRow}>
          <a
            href="mailto:info@mekarkstructure.com"
            className={styles.btnPrimary}
            style={{ display: "inline-block", textDecoration: "none" }}
          >
            REQUEST PROJECT CONSULTATION
          </a>
          <span className={styles.btnGhost}>TODAY</span>
        </div>

        {/* Contact Info Boxes */}
        <div className={styles.contactRow}>
          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>PHONE</p>
            <p className={styles.contactValue}>+91 98765 43210</p>
          </div>
          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>EMAIL</p>
            <p className={styles.contactValue}>info@mekarkstructure.com</p>
          </div>
          <div className={styles.contactBox}>
            <p className={styles.contactLabel}>HEAD OFFICE</p>
            <p className={styles.contactValue}>Chennai, Tamil Nadu</p>
          </div>
        </div>
      </div>
    </section>
  );
}
