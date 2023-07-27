import React from "react";
import styles from "../cssModules/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div>
      <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" />
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
    </div>
  );
};
export { Header };
