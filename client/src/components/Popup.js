import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../cssModules/popup.module.css";

export const PopUp = () => {
  const [firstNameValue, setFNvalue] = useState("");
  const firstNameValueHandler = (e) => {
    setFNvalue(e.target.value);
  };
  const [LastNameValue, setLNvalue] = useState("");
  const lastNameValueHandler = (e) => {
    setLNvalue(e.target.value);
  };
  return (
    <div >
      <Popup 
        trigger={
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt=""
          />
        }
        modal
        nested 
      >
        {(close) => (
          <div className={styles.popupBox}>
            <div className={styles.popup}>
              <h3 >Change your first and last Names</h3>
              <div >
                <textarea 
                className={styles.textArea}
                  placeholder="First Name"
                  onChange={firstNameValueHandler}
                  value={firstNameValue}
                />
              </div>
              <div>
                <textarea
                className={styles.textArea}
                  placeholder="Last Name"
                  onChange={lastNameValueHandler}
                  value={LastNameValue}
                />
              </div>
            </div>
            <div>
              <button onClick={() => close()}>Change your data</button>
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
