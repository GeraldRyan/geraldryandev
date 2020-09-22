import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "./Portfolio";
import About from "./About";


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gerald Ryan Portfolio</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hello World ✋</h1>
        <div clasName="link-bar">
        <a href={"https://github.com/GeraldRyan"}>
          <code className={styles.code}>GitHub</code>
        </a>
        <a href="https://www.linkedin.com/in/gerald-ryan-0007/">
          <code className={styles.code}>LinkedIn</code>
        </a>
      </div>
      <About></About>
      <Portfolio>

      </Portfolio>
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
