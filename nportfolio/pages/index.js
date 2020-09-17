import Head from "next/head";
import styles from "../styles/Home.module.css";

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
        <div className={styles.grid}>
          <a
            href="https://conways-game-of-life-lyart.vercel.app/"
            className={styles.card}
          >
            <h3>Conway's Game of Life &rarr;</h3>
            <img src="/assets/gameOfLife.png" alt="game of life grid" />
          </a>

          <a href="https://fitness-anywhere.now.sh/" className={styles.card}>
            <h3>Fitness Anywhere &rarr;</h3>
            <img src="/assets/fitany.png/" alt="weight lifter" />
          </a>

          <a
            href="https://main.dvxfvrn3mdjg1.amplifyapp.com/"
            className={styles.card}
          >
            <h3>Bridges To Prosperity &rarr;</h3>
            <img src="/assets/btp.png/" alt="map of Rwanda" />
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>American Football Scorecard &rarr;</h3>
            <img
              src="/assets/amfoot.png/"
              alt="Interactive Football scoreboard graphic"
            />
          </a>
        </div>
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
