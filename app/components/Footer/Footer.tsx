import Image from "next/image";
import styles from "./Footer.module.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Manufacturing", href: "#manufacturing" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#consultation" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        {/* Top row */}
        <div className={styles.top}>
          <div className={styles.brand}>
            <Image
              src="/assets/About Page - Black Logo.png"
              alt="Mekark"
              width={120}
              height={32}
              style={{ filter: "invert(1)" }}
            />
            <p className={styles.tagline}>
              Warehouse Contractors Built for Execution Certainty.
            </p>
            <p className={styles.address}>
              Chennai, Tamil Nadu, India
            </p>
          </div>

          <div className={styles.linksCol}>
            <p className={styles.colTitle}>Quick Links</p>
            <ul className={styles.links}>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className={styles.link}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.colTitle}>Get In Touch</p>
            <p className={styles.contactItem}>info@mekark.com</p>
            <p className={styles.contactItem}>+91 00000 00000</p>
            <a
              href="#consultation"
              className={styles.ctaLink}
            >
              Schedule Consultation →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Bottom row */}
        <div className={styles.bottom}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Mekark. All rights reserved.
          </p>
          <p className={styles.copy}>
            Manufacturing-driven Infrastructure Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
