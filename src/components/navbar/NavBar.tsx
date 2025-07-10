import Link from 'next/link';
import styles from './NavBar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          My App
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/about">
              About
            </Link>
          </li>
          <li>
            <Link href="/features">
              Features
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}