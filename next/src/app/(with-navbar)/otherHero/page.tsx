import styles from './styles.module.css'


export default function SecondHero() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlayBackground}>
          <div className={styles.ob2}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h1>The Mental Health Laboratory</h1>
            <h2>A next generation assessment platform.</h2>
            <p>Get to know more about our product.</p>
            <div className={styles.contentCta}>
              <button>Download Pitch Deck</button>
              <button>Contact Us</button>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.iphone}>
              <div className={styles.notch}></div>
              <div className={styles.screen}>
                <img src="/mockup.png" alt="Content" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <section className={styles.or}>OR</section>
      <section className={styles.hero}>
        <div className={styles.overlayBackground}>
          <div className={styles.ob3}></div>
        </div>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <h1>The Mental Health Laboratory</h1>
            <h2>A next generation assessment platform.</h2>
            <p>Get to know more about our product.</p>
            <div className={styles.contentCta}>
              <button>Download Pitch Deck</button>
              <button>Contact Us</button>
            </div>
          </div>
          <div className={styles.contentRight}>
            <div className={styles.iphone}>
              <div className={styles.notch}></div>
              <div className={styles.screen}>
                <img src="/mockup.png" alt="Content" />
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
}
