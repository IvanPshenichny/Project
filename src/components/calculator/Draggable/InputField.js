import React, { useContext, useState } from "react";
import styless from "../../../cssModules/calculator.module.css";
import { InputContext } from "../Context";

export const InputField = (props) => {
  const [context, setContext] = useContext(InputContext);
  const DeleteSymbol = () => {
    let symbol = String(context);
    setContext(symbol.substring(0, symbol.length - 1));
  };
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("item_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  return (
    <div
      className={styless.inputContainer}
      draggable={!props.toggleState}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <input className={styless.inputCanvas} value={context} placeholder="0" />
      <input className={styless.operatorInputCanvas} value={props.operator} />
      <button onClick={DeleteSymbol} className={styless.inputDeleteButton}>
        ⌫
      </button>
    </div>
  );
};
