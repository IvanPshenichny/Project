import React from "react";
import styles from "../../../cssModules/constructor.module.css";

export const MainDropField = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const item_id = e.dataTransfer.getData("item_id");
    const item = document.getElementById(item_id);
    item.style.display = "block";
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  if (props.draggTrigger === false) {
    return (
      <div
        className={styles.mainZoneOff}
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
      ></div>
    );
  } else {
    return (
      <div
        className={styles.mainZoneON}
        id={props.id}
        onDrop={drop}
        onDragOver={dragOver}
      ></div>
    );
  }
    
  
};
