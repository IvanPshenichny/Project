import React, { useEffect, useState } from "react";
import styles from "../cssModules/Content.module.css";
import styless from "../cssModules/Users.module.css";

const Users = (props) => {
  const [allUsers, setAllUsers] = useState([""]);

  const deleteUsers = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/deleteUsers/${id}`, {
        method: "DELETE",
      });
      setAllUsers(allUsers.filter((u) => u.id != id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAllUsers = async () => {
    try {
      const response = await fetch("http://localhost:3001/allUsers");
      const jsonData = await response.json();
      setAllUsers(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  const UsersStateList = allUsers.map((u) => {
    const id = u.id;
    console.log(id);
    return (
      <div className={styless.users} key={u.id}>
        <div className={styless.users}>
          <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
          {u.firstname + " " + u.lastname}
        </div>
        <div>
          <button onClick={() => deleteUsers(u.id)}> Delete </button>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.content}>
      <div>{UsersStateList}</div>
    </div>
  );
};
export { Users };
