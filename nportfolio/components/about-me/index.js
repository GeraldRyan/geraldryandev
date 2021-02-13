import React from "react";
import styles from "../../styles/Home.module.css";
import mod from "./about-me.module.scss";


export default () => {
  return (
    <div className={mod.fullWidth}>
      <div className={mod.aboutContainer}>
        <div className={mod.flexContent}>
          <h3 id={mod.about}>About:</h3>
          <p>
            I'm a full stack developer with a background in
            accounting and finance. I have been coding since 2017.
          </p>
        </div>
        <div className={mod.flexContent}>
          <h3 id="skills">Skills: </h3>
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
