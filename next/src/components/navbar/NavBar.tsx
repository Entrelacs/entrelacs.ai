"use client"

import Link from 'next/link';
import styles from './NavBar.module.css'
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <img src="/logo.png" alt="" />
          Entrelacs
        </Link>
        <div className={styles.hamburger} onClick={() => setMenuOpen((open) => !open)}>
          <span style={{ transform: menuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none' }}></span>
          <span style={{ opacity: menuOpen ? 0 : 1 }}></span>
          <span style={{ transform: menuOpen ? 'rotate(-45deg) translate(5px, -7px)' : 'none' }}></span>
        </div>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/otherHero">
              Other Hero Pages (Kristine)</Link>
          </li>
          <li>
            <Link href="/what-is-entrelacs">
              What is Entrelacs
            </Link>
          </li>
          <li>
            <Link href="/about">
              About Us
            </Link>
          </li>
          <li className={styles.cta}>
            <Link href="/contact">
              Contact Us
            </Link>
          </li>
        </ul>
        {menuOpen && (
          <div className={styles.mobileMenu}>
            <ul>
              <li>
                <Link href="/otherHero">
                  Other Hero Pages (Kristine)</Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)}>
                  What is Entrelacs
                </Link>
              </li>
              <li>
                <Link href="/features" onClick={() => setMenuOpen(false)}>
                  About Us
                </Link>
              </li>
              <li className={styles.cta}>
                <Link href="/contact" onClick={() => setMenuOpen(false)}>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}