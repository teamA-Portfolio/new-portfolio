import React from "react";
import styles from "../styles/navigationBar/navigationBar.module.scss";

function NavigationBar() {
  return (
    <div className={styles.navigationBar}>
      <div>
        <figure>
          <img src="../public/images/myImg.png" />
        </figure>
      </div>
    </div>
  );
}

export default NavigationBar;
