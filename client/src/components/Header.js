import React from "react";
import styles from "../cssModules/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <div className={styles.leftSide}>
        <div>
          <img src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png" />
        </div>
        <div className={styles.name}>{props.name}</div>
      </div>
      <div>
        <button 
        onClick={props.logout}
        className={styles.logoutButton}>
          Logout
          </button>
      </div>
    </div>
  );
};
export { Header };
