import HEAD from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const name = "daimaru";

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <HEAD>
        <link rel="icon" href="/favicon.ico" />
      </HEAD>
      <header className={styles.header}>
        <img src="/images/profile.png" className={utilStyles.borderCircle} />
        <h1 className={utilStyles.heading2Xl}>{name}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

export default Layout;