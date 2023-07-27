import React, { useContext } from "react";
import styless from "../../../cssModules/calculator.module.css";
import { InputContext } from "../Context";

export let Trigger = 0;
export const EqualButtonsField = (props) => {
  const [context, setContext] = useContext(InputContext);
  const equal = () => {
    if (props.toggleState === true) {
      if (props.operator === '/') {
        setContext(+props.oldNum / +context);
        props.setOldNum('');
        props.setOperator('');
      } else if (props.operator === 'x') {
        setContext(+props.oldNum * +context);
        props.setOldNum('');
        props.setOperator('');
      } else if (props.operator === '-') {
        setContext(+props.oldNum - +context);
        props.setOldNum('');
        props.setOperator('');
      } else if (props.operator === '+') {
        setContext(+props.oldNum + +context);
        props.setOldNum('');
        props.setOperator('');
      
      } else return;
    }
    else return;
    
  };
 const Runtime = props.toggleState;
  const dragStart = (e) => {
    if (Runtime === false) {
      const target = e.target;
    e.dataTransfer.setData("item_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
    }
    else {
      return
    }
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={styless.equalButtonContainer}
      draggable={!props.toggleState}
      id={props.id}
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div></div>
      <button onClick={equal} className={styless.equalButton}>
        =
      </button>
    </div>
  );
};
