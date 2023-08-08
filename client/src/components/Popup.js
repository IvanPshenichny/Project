import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import styles from "../cssModules/popup.module.css";
 
export const PopUp = () => {
    const [firstNameValue, setFNvalue] = useState ('')
    const firstNameValueHandler = (e) => {
        setFNvalue (e.target.value)
    }
    const [LastNameValue, setLNvalue] = useState ('')
    const lastNameValueHandler = (e) => {
        setLNvalue (e.target.value)    
    }
    return (
        <div>
            <Popup trigger=
                {<img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                alt=""
                 />}
                modal nested>
          
           {
                    close => (
                        <div className={styles.popup}>
                            <div >
                                <div>
                                    <textarea 
                                    placeholder='First Name'
                                    onChange={firstNameValueHandler}
                                    value={firstNameValue}/>
                                </div>
                                <div>
                                    <textarea 
                                    placeholder='Last Name'
                                    onChange={lastNameValueHandler}
                                    value={LastNameValue}/>
                                </div>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Change your data
                                </button>
                            </div>
                        </div>
                    )
                }
           </Popup>
        </div>
    )
};