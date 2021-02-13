import Head from "next/head";
import styles from "../styles/Home.module.css";
import Portfolio from "../components/Portfolio";
import About from "../components/about-me";
import Navbar from "../components/Navbar";

export default function Home() {
  const [dark, setDark] = React.useState(false);
  return (
    <>
      <div className={dark ? styles.darkMode : ""}>
        <Navbar dark={dark} setDark={setDark}></Navbar>
        <div className={styles.container}>
          <Head>
            <title>The Next Portfolio Page</title>
          </Head>
          <main className={styles.main}>
            <h1 className={styles.title}>Hello World ✋🤝</h1>
            <div clasName="link-bar">
              <a href={"https://github.com/GeraldRyan"}>
                <code className={dark ? styles.codeDark: styles.code}>GitHub</code>
              </a>
              <a href="https://www.linkedin.com/in/gerald-ryan-0007/">
                <code className={dark ? styles.codeDark: styles.code}>LinkedIn</code>
              </a>
            </div>
            <About dark={dark}></About>
            <Portfolio dark={dark}></Portfolio>
          </main>

        </div>
      </div>
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <img
                src="/vercel.svg"
                alt="Vercel Logo"
                className={styles.logo}
              />
            </a>
          </footer>
    </>
  );
}
