"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./OthersVsMekark.module.css";

const othersPoints = [
  "Fragmented execution",
  "Capacity limitations",
  "Timeline uncertainty",
  "Inconsistent quality",
];

const mekarkPoints = [
  "Integrated execution ecosystem",
  "Capacity-backed production",
  "Timeline-driven delivery",
  "Precision-built structures",
];

export default function OthersVsMekark() {
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
      {/* Top Area with Grid Background */}
      <div className={styles.topArea}>
        <div className="container">
          <h2 className={styles.title}>
            - Others vs. <em>Mekark</em> -
          </h2>
          <p className={styles.sub}>
            We don't manage projects — we engineer outcomes.
          </p>
        </div>
      </div>

      {/* Split Area (Black / Red) */}
      <div className={styles.splitArea}>
        <div className={styles.splitBg}>
          <div className={styles.bgLeft}></div>
          <div className={styles.bgRight}></div>
        </div>

        <div className={styles.splitInner}>
          {/* Left Column */}
          <div className={styles.colLeft}>
            <h3 className={styles.colTitleOther}>WHERE OTHERS FALL SHORT</h3>
            <ul className={styles.list}>
              {othersPoints.map((p, i) => (
                <li key={i} className={styles.listItemOther}>
                  <span className={styles.iconX}>✕</span> {p}
                </li>
              ))}
            </ul>
            <p className={styles.bottomTextOther}>
              Coordination-led. Risk-exposed.<br />Unpredictable.
            </p>
          </div>

          {/* Right Column */}
          <div className={styles.colRight}>
            <h3 className={styles.colTitleMekark}>WHAT MEKARK DELIVERS</h3>
            <ul className={styles.list}>
              {mekarkPoints.map((p, i) => (
                <li key={i} className={styles.listItemMekark}>
                  <span className={styles.iconCheck}>✓</span> {p}
                </li>
              ))}
            </ul>
            <p className={styles.bottomTextMekark}>
              Manufacturing-driven.<br />Zero-dependency. Certain.
            </p>
          </div>
        </div>

        {/* Images with clip containers — each image is clipped to its background side */}
        {/* Left clip: covers left 50%, clips crane image to black side only */}
        <div className={styles.imgClipLeft}>
          <Image
            src="/assets/others vs mekark page -construction site left combined with right.png"
            alt="Others Construction"
            width={500}
            height={660}
            className={styles.imgLeft}
          />
        </div>
        {/* Right clip: covers right 50%, clips warehouse image to red side only */}
        <div className={styles.imgClipRight}>
          <Image
            src="/assets/others vs mekark page -construction site right combined with left.png"
            alt="Mekark Warehouse"
            width={500}
            height={660}
            className={styles.imgRight}
          />
        </div>
      </div>

    </section>
  );
}
