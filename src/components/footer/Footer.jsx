import styles from './footer.module.css'

const Footer = () => {
  return (
    <div className={styles.container}>
      <p className={styles.logo}>LacoDev</p>
      <p className={styles.text}>Lacodev creative thoughts agency &copy; All right reserved. </p>
    </div>
  );
}

export default Footer;