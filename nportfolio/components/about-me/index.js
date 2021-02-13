import React from "react";
import mod from "./about-me.module.scss";


export default () =>
{
  return (
    <div className={mod.wideContainer}>
      <div className={mod.narrowContainer}>
        <div className={mod.layer}>
          <h3 className={mod.boldwords}>About:</h3>
          <p className={mod.pContent}>
            I'm a full stack developer with a background in
            accounting and finance. I have been coding since 2017.
          </p>
        </div>
        <div className={mod.layer}>
          <h3 className={mod.boldwords}>Skills: </h3>
            <p className={mod.pContent}>
              Python | TypeScript | C | React | SQL | git
            </p>
        </div>
      </div>
    </div>
  );
}
