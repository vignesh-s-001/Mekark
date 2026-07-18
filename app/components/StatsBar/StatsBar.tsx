import styles from "./StatsBar.module.css";

const stats = [
  { value: "6 Lakh+", label: "Sq. Ft. Manufacturing Facility" },
  { value: "3000+", label: "Tonnes / Month Production" },
  { value: "ISO", label: "Certified System" },
  { value: "15+", label: "Years of Execution Excellence" },
  { value: "Semi", label: "Automated Manufacturing" },
  { value: "Zero", label: "Compromise Delivery" },
];

export default function StatsBar() {
  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        {stats.map((s, i) => (
          <div key={i} className={styles.item}>
            <span className={styles.value}>{s.value}</span>
            <span className={styles.label}>{s.label}</span>
            {i < stats.length - 1 && <span className={styles.divider} />}
          </div>
        ))}
      </div>
    </div>
  );
}
