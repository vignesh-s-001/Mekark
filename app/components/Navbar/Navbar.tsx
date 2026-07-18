"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "SERVICES", href: "#services" },
  { label: "INDUSTRIES", href: "#industries" },
  { label: "MANUFACTURING", href: "#manufacturing" },
  { label: "PROJECTS", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        {/* Logo — red box background like Figma */}
        <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className={styles.logoBox}>
          <Image
            src="/assets/About Page - Black Logo.png"
            alt="Mekark"
            width={130}
            height={34}
            priority
            style={{ filter: "invert(1)", objectFit: "contain" }}
          />
        </a>

        {/* Desktop Nav */}
        <nav className={styles.nav}>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleScroll(e, l.href)}
              className={styles.navLink}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hamburger icon (always visible on desktop in Figma design) */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileOpen : ""}`}>
        {navLinks.map((l) => (
          <a
            key={l.label}
            href={l.href}
            onClick={(e) => handleScroll(e, l.href)}
            className={styles.mobileLink}
          >
            {l.label}
          </a>
        ))}
        <a
          href="#consultation"
          onClick={(e) => handleScroll(e, "#consultation")}
          className={styles.mobileCta}
        >
          REQUEST PROJECT CONSULTATION
        </a>
      </div>
    </header>
  );
}
