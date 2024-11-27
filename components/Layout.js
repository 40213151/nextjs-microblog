import HEAD from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "daimaru";

function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <HEAD>
        <link rel="icon" href="/favicon.ico" />
      </HEAD>
      <header className={styles.header}>
        {home ? (
          <>
            <img
              src="/images/profile.png"
              className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <img
              src="/images/profile.png"
              className={utilStyles.borderCircle}
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && <Link href="/">← ホームへ戻る</Link>}
    </div>
  );
}

export default Layout;
