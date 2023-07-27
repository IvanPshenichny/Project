import React from "react";

export const DropField_1 = (props) => {
  const drop = (e) => {
    e.preventDefault();
    const item_id = e.dataTransfer.getData("item_id");
    const item = document.getElementById(item_id);
    item.style.display = "block";
    if (item_id == "1") {
      e.target.prepend(item);
    } else {
      e.target.append(item);
    }
  };
  const dragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={props.className}
      id={props.id}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};
