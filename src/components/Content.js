import React, { useEffect, useState } from "react";
import styles from "../cssModules/Content.module.css";
import { ToDo} from "./ToDoList";
import { Users } from "./Users";
import { Routes, Route } from "react-router-dom";
import { Calculator } from "./calculator/Calculator";

localStorage.setItem("usersState", JSON.stringify([]));

const Content = (props) => {
const UsersState = JSON.parse(localStorage.getItem("usersState"));
const [usersState, changeUsersList] = useState([UsersState]);
const [addUserNameState, changeUserName] = useState("");

   useEffect(() => {
   changeUsersList(UsersState);
   }, []);
   useEffect(() => {
     localStorage.setItem("usersState", JSON.stringify(usersState));
   }, [usersState]);

   return (
     <div className={styles.content}>
       <Routes>
           <Route path="/UserManagment/" element={
           <Users 
           UsersState = {UsersState}
           usersState = {usersState}
          changeUsersList = {changeUsersList}
           addUserNameState = {addUserNameState}
           changeUserName = {changeUserName} />} 
           />
           <Route path="/Users/" element={
           <Users/>} 
           />
           <Route path="/ToDoList/" element={<ToDo />} />
           <Route path="/Calculator/" element={<Calculator />} />
         </Routes>
     </div>
   );
 };
 export { Content };
