import React, { useState, useEffect } from "react";
import styless from "../cssModules/ToDo.module.css";

localStorage.setItem("ToDoList", JSON.stringify([]));
localStorage.setItem("EditingHandler", JSON.stringify([]));
localStorage.setItem("InputValueHandler", JSON.stringify([]));

function ToDo() {
  const ToDoStateList = JSON.parse(localStorage.getItem("ToDoList"));
  const EditingHandler = JSON.parse(localStorage.getItem("EditingHandler"));
  const InputValueHandler = JSON.parse(
    localStorage.getItem("InputValueHandler")
  );
  const [ToDoState, ChangeToDoState] = useState([ToDoStateList]);
  const [InputValue, SetInputValue] = useState([]);
  const [editing, setEditing] = useState(false);
  useEffect(() => {
    ChangeToDoState(ToDoStateList);
  }, []);
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(ToDoState));
  }, [ToDoState]);

  useEffect(() => {
    setEditing(EditingHandler);
  }, []);
  useEffect(() => {
    localStorage.setItem("EditingHandler", JSON.stringify(editing));
  }, [editing]);

  useEffect(() => {
    SetInputValue(InputValueHandler);
  }, []);
  useEffect(() => {
    localStorage.setItem("InputValueHandler", JSON.stringify(InputValue));
  }, [InputValue]);

  const SetToDoText = (e) => {
    SetInputValue(e.target.value);
  };
  const AddToDo = () => {
    if (InputValue.length > 0) {
      ChangeToDoState([
        ...ToDoState,
        {
          id: ToDoState.length + 1,
          value: InputValue[0].toUpperCase() + InputValue.slice(1),
          editing: false,
          disabled: false,
        },
      ]);
      SetInputValue("");
    }
  };

  const DeleteToDo = (id) => {
    ChangeToDoState(ToDoState.filter((item) => item.id !== id));
  };
  const EditToDoItem = (todo) => {
    SetInputValue(todo.value);
    const newList = ToDoState.map((item) => {
      if (item.id === todo.id) {
        item.editing = true;
        item.disabled = true;
      } else if (item.id !== todo.id) {
        item.disabled = true;
      }
      return item;
    });

    ChangeToDoState(newList);
    setEditing(true);
  };
  const saveEdit = () => {
    if (InputValue.length < 0) return;
    const newList = [...ToDoState].map((item) => {
      if (item.editing) {
        item.value = InputValue;
        item.editing = false;
        item.disabled = false;
      } else if (!item.editing) {
        item.disabled = false;
      }
      return item;
    });
    ChangeToDoState(newList);
    setEditing(false);
    SetInputValue("");
  };

  const ToDoList = ToDoState.map((item) => {
    return (
      <div className={styless.toDo}>
        <div className={styless.toDoItemWrapper}>
          <div className={styless.toDoItem}>{item.value}</div>
        </div>
        <div>
          <button onClick={() => DeleteToDo(item.id)} disabled={item.disabled}>
            Delete
          </button>
          ㅤㅤ
          <button
            disabled={item.disabled}
            onClick={() => EditToDoItem(item, item.id)}
          >
            Edit
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className={styless.toDoInput}>
      <div>
        <input
          className={styless.input}
          value={InputValue}
          onChange={SetToDoText}
          type="text"
          placeholder="Add ToDo"
        />
      </div>
      <div>
        {editing === true ? (
          <button onClick={saveEdit}> Save Changes </button>
        ) : (
          <button onClick={AddToDo}> Add </button>
        )}
      </div>

      <div>{ToDoList}</div>
    </div>
  );
}
export { ToDo };
