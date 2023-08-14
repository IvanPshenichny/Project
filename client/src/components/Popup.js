import React, { useState } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import styles from "../cssModules/popup.module.css";

export const PopUp = (props) => {
  const id = props.id;
  const getAllUsers = props.getAllUsers;
  const [firstname, setFNvalue] = useState("");
  const [lastname, setLNvalue] = useState("");
  const updateUsers = async (id) => {
    
    try {
        const body = { firstname, lastname };
      const response = await fetch(`http://localhost:3001/updateUsers/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      getAllUsers();
      setFNvalue('');
      setLNvalue('');
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <Popup 
        trigger={
          <img
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
            
          />
        }
       
        //modal
        nested 
      >
        {(close) => (
          <div className={styles.popupBox}>
            <div className={styles.popup}>
              <h3 className={styles.title} >Change your first and last Names</h3>
              <div >
                <textarea 
                className={styles.textArea}
                  placeholder="First Name"
                  onChange={e => {setFNvalue(e.target.value)}}
                  value={firstname}
                />
              </div>
              <div>
                <textarea
                className={styles.textArea}
                  placeholder="Last Name"
                  onChange={e => {setLNvalue(e.target.value)}}
                  value={lastname}
                />
              </div>
            </div>
            <div>
              <button onSubmit={updateUsers}
              className={styles.button}
              onClick={() => {updateUsers(id); close(); }}>
                Change your data
                </button>
                
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};
