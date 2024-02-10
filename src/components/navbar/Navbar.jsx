import Links from "./links/Links";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={`${styles.container} px-5 md:px-24 `}>
      <div className={styles.logo}>Lacoco</div>
      <div>
       <Links />
      </div>
    </div>
  );
}

export default NavBar;