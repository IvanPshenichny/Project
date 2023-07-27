import React, { useContext } from "react";
import styless from "../../../cssModules/calculator.module.css";
import { InputContext } from "../Context";

export const UpperButtonsField = (props) => {
  const [context, setContext] = useContext(InputContext);
  const NumChangeHandler = (e) => {
    if (props.toggleState === true) {
      if (props.operator === "") {
        props.setOldNum(context);
        setContext("");
        props.setOperator("");
        props.setOperator(e.target.value);
      } else if (props.operator !== "") {
        if (props.operator === "/") {
          props.setOldNum(+props.oldNum / +context);
          setContext("");
          props.setOperator(e.target.value);
        } else if (props.operator === "x") {
          props.setOldNum(+props.oldNum * +context);
          setContext("");
          props.setOperator(e.target.value);
        } else if (props.operator === "-") {
          props.setOldNum(+props.oldNum - +context);
          setContext("");
          props.setOperator(e.target.value);
        } else if (props.operator === "+") {
          props.setOldNum(+props.oldNum + +context);
          setContext(+props.oldNum);
          props.setOperator(e.target.value);
        }
      }
      return;
    } else return;
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
      className={styless.upperButtonsContainer}
      draggable={!props.toggleState}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <button
        onClick={NumChangeHandler}
        className={styless.upperButtons}
        value={"/"}
      >
        /
      </button>
      <button
        onClick={NumChangeHandler}
        className={styless.upperButtons}
        value={"x"}
      >
        x
      </button>
      <button
        onClick={NumChangeHandler}
        className={styless.upperButtons}
        value={"-"}
      >
        -
      </button>
      <button
        onClick={NumChangeHandler}
        className={styless.upperButtons}
        value={"+"}
      >
        +
      </button>
    </div>
  );
};
