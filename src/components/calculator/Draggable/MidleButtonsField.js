import React, { useContext } from "react";
import styless from "../../../cssModules/calculator.module.css";
import { InputContext } from "../Context";

export const MidButtonsField = (props) => {
  const [context, setContext] = useContext(InputContext);
  const valueHandler = (e) => {
    if (props.toggleState === true) {
      let value = e.target.value;
      if (context === "") {
        setContext(value);
      } else {
        setContext(context + value);
      }
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
      className={styless.MidlebuttonsContainer}
      draggable={!props.toggleState}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div>
        <button onClick={valueHandler} value={7} className={styless.midButtons}>
          7
        </button>
        <button onClick={valueHandler} value={8} className={styless.midButtons}>
          8
        </button>
        <button onClick={valueHandler} value={9} className={styless.midButtons}>
          9
        </button>
      </div>
      <div>
        <button onClick={valueHandler} value={4} className={styless.midButtons}>
          4
        </button>
        <button onClick={valueHandler} value={5} className={styless.midButtons}>
          5
        </button>
        <button onClick={valueHandler} value={6} className={styless.midButtons}>
          6
        </button>
      </div>
      <div>
        <button onClick={valueHandler} value={1} className={styless.midButtons}>
          1
        </button>
        <button onClick={valueHandler} value={2} className={styless.midButtons}>
          2
        </button>
        <button onClick={valueHandler} value={3} className={styless.midButtons}>
          3
        </button>
      </div>
      <div>
        <button
          onClick={valueHandler}
          value={0}
          className={styless.zerroButton}
        >
          0
        </button>
        <button
          onClick={valueHandler}
          value={"."}
          className={styless.midButtons}
        >
          .
        </button>
      </div>
    </div>
  );
};
