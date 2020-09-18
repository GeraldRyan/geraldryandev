import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import styles from "../../styles/Home.module.css";

export default function PortfolioPieces() {
  const [openModal, setOpenModal] = React.useState(false);
  const handleClick = () => setOpenModal(true);
  const closeModal = () => setOpenModal(false);
  return (
    <div>
      <div className={styles.container}>
        <Button onClick={handleClick}>Open Modal</Button>
        <Dialog open={openModal} onClose={closeModal}>
          It is dangerous to go alone. Take this
        </Dialog>
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
      </div>
    </div>
  );
}
