import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.name}>Welcome to App Test</h1>
      <img src="/logo.png" alt="logo" className={styles.logo} />
    </div>
  );
};

export default Navbar;
