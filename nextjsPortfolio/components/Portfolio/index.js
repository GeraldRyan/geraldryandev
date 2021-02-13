import React from "react";
import styles from "../../styles/home.module.css";
import {portfolioData} from "./portfolioData";
import PortfolioPiece from "./PortfolioPiece";

export default function Portfolio({dark}) {
  return (
    <div className="link-bar">
      <div className={styles.container}>
      <code className={dark ? styles.codeDark: styles.code}>Misc Projects</code>
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


