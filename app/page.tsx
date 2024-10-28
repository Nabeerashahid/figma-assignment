import Image from 'next/image';
import styles from "./styles/style.module.css"
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <div>

      <section className={styles.container}>
        <header className={styles.header}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <a href="#"> Works </a> </li>
              <li> <a href="#"> Blog </a> </li>
              <li> <a href="#"> Contact </a>
              </li>
            </ul>
          </nav>
        </header>

        <main className={styles.mainSection}>
          <div className={styles.div}>
            <h1 className={styles.heroSection}> Hi, I am John,<br />
              Creative Technologist </h1>

            <p className={styles.heroText}> Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. </p>

            <p className={styles.downloadResume}>
              Download Resume
            </p>
          </div>
          <div className={styles.img}>
            <Image
              src="/image.jpg"
              alt="hero-image"
              width={100}
              height={100}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </main>

        <div className={styles.recent}>
          <div className={styles.recentPost}>
            <p> Recent Post </p>

            <h5>View All</h5>
            <section className={styles.post}>
              <div className={styles.box1}>
                <h1>Making a design system from scratch</h1>

                <p> 12 Feb 2020    |    Design , Pattern</p>

                <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
              </div>

              <div className={styles.box2}>
                <h1>Making a design system from scratch</h1>

                <p> 12 Feb 2020    |    Design , Pattern</p>

                <h6>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</h6>
              </div>

            </section>
          </div>
        </div>

        <div className={styles.featureSection}>
        <div className={styles.feature}>
          <section className={styles.featureWork}>
            <p> Featured works </p>

            <div className={styles.box3}>
              <div className={styles.img2}>
                <Image
                  src="/Rectangle 30.jpg"
                  alt='computer-image'
                  width={180}
                  height={100}
                />
              </div>

              <div className={styles.featureText}> <p> Designing Dashboards </p> </div>
              <div className={styles.box}> 2020  <span>Dashboard</span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>

              <div className={styles.img3}>
                <Image
                  src="/Rectangle 32.jpg"
                  alt='girl-image'
                  width={180}
                  height={100}
                />
              </div>

              <div className={styles.featureText2}> <p> Designing Dashboards </p> </div>
              <div className={styles.box4}> 2020  <span>Dashboard</span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>

              <div className={styles.img4}>
                <Image
                  src="/Rectangle 34.jpg"
                  alt='rectangle-image'
                  width={180}
                  height={100}
                />
              </div>

              <div className={styles.featureText3}> <p> Designing Dashboards </p> </div>
              <div className={styles.box5}> 2020  <span>Dashboard</span>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </section>
        </div>
        </div>
        <footer className={styles.footer}>
          <div className={styles.icon}>
            <FaFacebookSquare />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
          <p>Copyright ©2020 All rights reserved </p>
        </footer>
      </section>
    </div>
  )
}
