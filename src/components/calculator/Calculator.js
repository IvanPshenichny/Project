import React, { useState } from "react";
import styless from "../../cssModules/calculator.module.css";
import styles from "../../cssModules/constructor.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { InputField } from "./Draggable/InputField";
import { UpperButtonsField } from "./Draggable/UpperButtonsField";
import { MidButtonsField } from "./Draggable/MidleButtonsField";
import { EqualButtonsField } from "./Draggable/EqualButtonsField";
import { DropField_1 } from "./Dropable/DropField";
import { MainDropField } from "./Dropable/MainDropField";
import { ToggleButton } from "./Draggable/ToggleButton";
import { InputContext } from "./Context";

export const Calculator = () => {
  const [context, setContext] = useState("");
  const [oldNum, setOldNum] = useState("");
  const [operator, setOperator] = useState("");
  const [equalTrigger, setEqualTrigger] = useState(0);
  const [toggleState, toggleChange] = useState(false);
  const [draggTrigger, setDraggTrigger] = useState(false);
  return (
    <DndProvider backend={HTML5Backend}>
      <MainDropField
        draggTrigger={draggTrigger}
        draggable="true"
        className={styles.mainZone}
        id="1field"
      />
      <div className={styles.Maincontainer}>
        <InputContext.Provider value={[context, setContext]}>
          <div className={styless.leftBlockContainer}>
            <div>
              <DropField_1 className={styles.leftDropZone}>
                <InputField
                  setDraggTrigger={setDraggTrigger}
                  operator={operator}
                  id="1"
                  draggable="true"
                  toggleState={toggleState}
                />
                <UpperButtonsField
                  setDraggTrigger={setDraggTrigger}
                  toggleState={toggleState}
                  oldNum={oldNum}
                  setOldNum={setOldNum}
                  operator={operator}
                  setOperator={setOperator}
                  id="2"
                  draggable="true"
                />
                <MidButtonsField
                  setDraggTrigger={setDraggTrigger}
                  toggleState={toggleState}
                  equalTrigger={equalTrigger}
                  setEqualTrigger={setEqualTrigger}
                  operator={operator}
                  id="3"
                  draggable="true"
                />
                <EqualButtonsField
                  setDraggTrigger={setDraggTrigger}
                  draggTrigger={draggTrigger}
                  toggleState={toggleState}
                  equalTrigger={equalTrigger}
                  setEqualTrigger={setEqualTrigger}
                  oldNum={oldNum}
                  setOldNum={setOldNum}
                  operator={operator}
                  setOperator={setOperator}
                  id="4"
                  draggable="true"
                />
              </DropField_1>
            </div>
          </div>
          <div className={styles.mainConstructorContainer}>
            <div>
              <ToggleButton
                toggleState={toggleState}
                toggleChange={toggleChange}
              />
            </div>
            <div>
              <DropField_1 className={styles.rightDropZone} />
            </div>
          </div>
        </InputContext.Provider>
      </div>
    </DndProvider>
  );
};
