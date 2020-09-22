import React from "react";
import styles from "../../styles/Home.module.css";
import { portfolioData } from "./portfolioData";
import PortfolioPiece from "./PortfolioPiece";

export default function Portfolio() {
  return (
    <div className="link-bar">
      <div className={styles.container}>
      <code className={styles.code}>View my Porfolio</code>
        <div className={styles.grid}>
          {portfolioData.map((folio, index) => {
            return (
              <React.Fragment key={index}>
              <PortfolioPiece
                folio={folio}
                key={index}
                index={index}
              />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
