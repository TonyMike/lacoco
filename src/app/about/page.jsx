import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Agency</h2>
        <h1 className={styles.title}>We create digital idea that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}>
          We specialize in forging digital concepts that are not
          just expansive, audacious and courageous, but also
          superior. Our firm harbors a deep-seated belief in the
          power of innovative ideas combined with flexibility and
          precision. Being globally recognized as one of the finest
          consulting and finance solution providers amplifies our
          commitment to excellence. We offer an extensive array
          of web and software development services tailored to
          suit your unique needs.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10k</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10k</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>

      <div className={styles.imgContainer}>
        <Image src='/about.png' alt="about image" fill className={styles.img} />
      </div>

    </div>
  );
}

export default AboutPage;