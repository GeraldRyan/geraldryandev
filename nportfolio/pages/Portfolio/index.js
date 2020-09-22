import React from "react";
import styles from "../../styles/Home.module.css";
import { portfolioData } from "./portfolioData";
import PortfolioPiece from "./PortfolioPiece";

export default function Portfolio() {
  return (
    <div>
      <div className={styles.container}>
      <code className={styles.code}>View my Porfolio</code>
        <div className={styles.grid}>
          {portfolioData.map((folio, index) => {
            return (
              <PortfolioPiece
                folio={folio}
                key={index}
                index={index}
              ></PortfolioPiece>
            );
          })}
        </div>
      </div>
    </div>
  );
}
