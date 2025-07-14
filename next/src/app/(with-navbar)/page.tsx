import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.overlayBackground}>
          <div className={styles.ob1}></div>
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
      <section className={styles.section1}>
        <div className={styles.section1_Left}>
          <h2>The Social Connection Crisis</h2>
          <div className={styles.s1L_image}></div>
        </div>
        <div className={styles.section1_Right}></div>
      </section>
      <section className={styles.section2}>
        <h2>Our Vision</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          modi voluptate cumque ut doloremque cum minus excepturi voluptatum tenetur
          neque molestiae necessitatibus veniam? Similique accusamus fuga quia sed ad tempora.
        </p>
      </section>

      <section className={styles.section3}>
        <div className={styles.section3_Left}>
          <h2>Three-Pillar Approach</h2>
        </div>
        <div className={styles.section3_Right}>
          <div className={`${styles.iphone} ${styles.smaller_iphone}`}>
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              <img src="/mockup.png" alt="Content" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section4}>
        <div className={styles.section4_Left}>
          <h2>The Technology</h2>
          <div className={`${styles.iphone} ${styles.smaller_iphone}`}>
            <div className={styles.notch}></div>
            <div className={styles.screen}>
              <img src="/mockup.png" alt="Content" />
            </div>
          </div>
        </div>
        <div className={styles.section4_Right}>
        </div>
      </section>

      <section className={styles.section5}>
        <div className={styles.section5_Left}>
          <h2>Triple Win</h2>
        </div>
        <div className={styles.section5_Right}>
        </div>
      </section>

      <section className={styles.section6}>
        <div className={styles.section6_Left}>
          <h2>Why Entrelacs Stands Out</h2>
        </div>
        <div className={styles.section6_Right}>
        </div>
      </section>

      <section className={styles.contact}>
        <h2>Contact Us</h2>
        <form action="" className={styles.contact_form}>
          <div className={styles.elem}>
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className={styles.elem}>
            <label htmlFor="">E-mail</label>
            <input type="email" placeholder="Your Email" />
          </div>
          <div className={styles.elem}>
            <label htmlFor="">Organization Name</label>
            <input type="text" placeholder="Organization Name" />
          </div>
          <div className={styles.elem}>
            <label htmlFor="">Contact Number</label>
            <input type="text" placeholder="Your Contact Numberr" />
          </div>

          <div className={styles.elemwide}>
            <label htmlFor="">Message</label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </section>

    </div>
  );
}
