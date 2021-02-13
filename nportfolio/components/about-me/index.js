import React from "react";
import styles from "../../styles/Home.module.css";
import modstyles from "./About.module.css";

export default function About() {
  return (
    <div className={modstyles.fullWidth}>
      <div className={modstyles.aboutContainer}>
        <div className={modstyles.flexContent}>
          <h3>About:</h3>
          <p>
            I'm a full stack developer with a background in finance and
            accounting. I have been coding since 2017.
          </p>
        </div>
        <div className={modstyles.flexContent}>
          <h3>Skills: </h3>
          <div className="languages shared-width">
            <p>
              Python | TypeScript | C | SQL | React | git |
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
