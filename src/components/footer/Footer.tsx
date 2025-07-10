// components/Footer.js
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Top Section: Logo & Nav Links */}
      <div className={styles.topSection}>
        {/* Left Side: Logo and Company Name */}
        <div className={styles.companyInfoContainer}>
          <div className={styles.logoContainer}>
            <Image
              src="/path/to/your/logo.svg" // Replace with the actual path to your logo
              alt="Entrelacs Logo"
              width={120}
              height={120}
            />
          </div>
          <h3 className={styles.companyName}>Entrelacs</h3>
        </div>

        {/* Right Side: Three Columns of Links */}
        <div className={styles.linksContainer}>
          <div className={styles.linkColumn}>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/blog">Our Blog</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Products</h4>
            <ul>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
            </ul>
          </div>
          <div className={styles.linkColumn}>
            <h4>Support</h4>
            <ul>
              <li><Link href="/help-center">Help Center</Link></li>
              <li><Link href="/support">Support</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section: Legal & Copyright */}
      <div className={styles.bottomSection}>
        <p className={styles.copyright}>
          © {currentYear} Entrelacs. All Rights Reserved.
        </p>
        <div className={styles.legalLinks}>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}