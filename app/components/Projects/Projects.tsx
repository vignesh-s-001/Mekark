"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./Projects.module.css";

const projects = [
  {
    img: "/assets/our projects - left.jpg",
    category: "LOGISTICS HUB",
    title: "Mega Distribution Centre",
    location: "Chennai, Tamil Nadu — 1.5 lakh sq.ft.",
    span: "tall",
  },
  {
    img: "/assets/our projects- right 4 image left top.png",
    category: "E-COMMERCE FULFILLMENT",
    title: "High-Speed Dispatch Hub",
    location: "Tamil Nadu — 90,000 sq.ft.",
    span: "",
  },
  {
    img: "/assets/our projects- right 4 image right top.jpg",
    category: "HEAVY ENGINEERING",
    title: "Automotive Parts Warehouse",
    location: "Gujarat — 1.2 lakh sq.ft.",
    span: "",
  },
  {
    img: "/assets/our projects- right 4 image left bottom.png",
    category: "COLD STORAGE",
    title: "Cold Chain Warehouse Facility",
    location: "Karnataka — 80,000 sq.ft.",
    span: "",
  },
  {
    img: "/assets/our projects- right 4 image right bottom.jpg",
    category: "MANUFACTURING",
    title: "Integrated Production Complex",
    location: "Maharashtra — 2 lakh sq.ft.",
    span: "",
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className={styles.section}>
      {/* Top area with red dotted background */}
      <div className={styles.topArea}>
        <div className="container">
          <div className={styles.header}>
            <h2 className={styles.title}>
              - Our Completed <em>Projects</em> -
            </h2>
            <p className={styles.sub}>
              A portfolio of warehouse infrastructure delivered with manufacturing-grade precision
              across logistics, automotive, cold chain, and production sectors.
            </p>
          </div>
        </div>
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.grid}>
          {/* Big left card */}
          <div className={`${styles.card} ${styles.cardTall} ${styles.cardBottomShadow}`}>
            <Image
              src={projects[0].img}
              alt={projects[0].title}
              fill
              style={{ objectFit: "cover" }}
            />
            <div className={styles.cardOverlay}>
              <p className={styles.cardCategory}>{projects[0].category}</p>
              <p className={styles.cardTitle}>{projects[0].title}</p>
              <p className={styles.cardLocation}>{projects[0].location}</p>
            </div>
          </div>

          {/* Right 2×2 grid */}
          <div className={styles.rightGrid}>
            {projects.slice(1).map((p, i) => (
              <div key={i} className={`${styles.card} ${i >= 2 ? styles.cardBottomShadow : ''}`}>
                <Image
                  src={p.img}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.cardOverlay}>
                  <p className={styles.cardCategory}>{p.category}</p>
                  <p className={styles.cardTitle}>{p.title}</p>
                  <p className={styles.cardLocation}>{p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
