import PropTypes from "prop-types";
import React, { Component, useContext, useState } from "react";
import { InputContext } from "../Context";
import styles from "../../../cssModules/ToggleButton.module.css";

export const ToggleButton = (props) => {
    const [context, setContext] = useContext(InputContext);
  const ConstructorButtonHandler = () => {
    props.toggleChange(false);
    setContext('');
  };
  const RuntimeButtonHandler = () => {
    props.toggleChange(true);
  };
let RuntimeClassName;
let ConstructorClassName;
  if (props.toggleState === false) {
    RuntimeClassName = styles.ToggleButtonRuntimeOFF;
    ConstructorClassName = styles.ToggleButtonConstructorON;
  }
    else {
      RuntimeClassName = styles.ToggleButtonConstructorON;
      ConstructorClassName = styles.ToggleButtonConstructorOFF;
    }
    return (
      <div className={styles.TogleButtonContainer}>
        <button
          onClick={RuntimeButtonHandler}
          className={RuntimeClassName}
        >
          {" "}
          Runtime{" "}
        </button>
        <button
          onClick={ConstructorButtonHandler}
          className={ConstructorClassName}
        >
          {" "}
          Constructor{" "}
        </button>
      </div>
    );
    }
