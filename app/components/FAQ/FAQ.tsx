"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./FAQ.module.css";

const faqs = [
  {
    q: "How does Mekark deliver warehouse projects within 120 days without delays?",
    a: "Our integrated manufacturing facility produces all structural components in-house, eliminating third-party supplier delays. Combined with parallel workstreams and pre-engineered systems, we compress timelines while maintaining ISO-certified quality standards.",
  },
  {
    q: "Can Mekark handle multiple large-scale warehouse projects simultaneously?",
    a: "Yes. Our manufacturing capacity supports concurrent projects across multiple locations. Dedicated project managers, shared engineering resources, and our supply chain infrastructure ensure consistent delivery standards regardless of project count.",
  },
  {
    q: "What quality standards are followed during fabrication and construction?",
    a: "Every component undergoes factory QC before dispatch — dimensional checks, load tests, and coating verification. On-site, our dedicated quality engineers perform stage-wise inspections aligned with IS standards and client-specific criteria.",
  },
  {
    q: "What makes Mekark suitable for MNC and enterprise-level projects?",
    a: "Our scale, in-house capability, ISO-certified processes, and integrated delivery model make us the preferred partner for enterprises that demand precision, accountability, and zero execution gaps.",
  },
  {
    q: "How does Mekark reduce execution risks?",
    a: "By keeping manufacturing, design, and construction under one roof, we eliminate coordination gaps. Our pre-engineered systems and factory-tested components reduce on-site variables significantly.",
  },
  {
    q: "How are warehouses engineered for heavy-duty industrial usage?",
    a: "We design for high floor loads, heavy racking systems, and operational continuity — using structural steel, reinforced RCC floors, and industrial-grade cladding systems suited for 24/7 operations.",
  },
  {
    q: "Can Mekark handle multiple large-scale warehouse projects simultaneously?",
    a: "Our centralized manufacturing and dedicated project teams enable us to run parallel projects across geographies without compromising quality or timelines.",
  },
  {
    q: "Can Mekark support fast-track or time-critical projects?",
    a: "Absolutely. Our pre-engineered approach, in-house fabrication, and experienced rapid-deployment teams allow us to mobilize quickly and meet even the most aggressive project timelines.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) ref.current?.classList.add(styles.visible); },
      { threshold: 0.08 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const toggle = (i: number) => setOpen(open === i ? null : i);

  return (
    <section id="faq" ref={ref} className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>— FREQUENTLY ASKED QUESTIONS —</p>
          <h2 className={styles.title}>
            Answers to <em>Key Questions</em>
          </h2>
        </div>
        <div className={styles.grid}>
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`${styles.item} ${open === i ? styles.itemOpen : ""}`}
              onClick={() => toggle(i)}
            >
              <div className={styles.question}>
                <span className={styles.qText}>{f.q}</span>
                <span className={styles.icon}>{open === i ? "−" : "+"}</span>
              </div>
              <div className={styles.answer}>
                <p className={styles.answerText}>{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
