import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerald Ryan Portfolio</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World ✋</h1>

        <p className={styles.description}>
          <code className={styles.code}>View my Porfolio</code>
        </p>
      <Portfolio></Portfolio>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
