import React from "react";
import styles from "../cssModules/Header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header} >
      <div className={styles.leftSide} >
      <div >
      <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
      </div>
      <div className={styles.name}>
        {props.name}
      </div>
      </div>
      <div>
        <button onClick={props.logout}>Logout</button>
      </div>
    </div>
  );
};
export { Header };
