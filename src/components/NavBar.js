import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../cssModules/NavBar.module.css";

 const NavBar = (props) => {
   return (
     <div className={styles.bar}>
       <div> </div>
       <div> </div>
       <div> </div>
       <NavLink
         to="/dashboard/Users/"
         className={({ isActive }) => (isActive ? styles.active : styles.item)}
       >
         Users
       </NavLink>
       <div> </div>
       <div> </div>

       <NavLink
         to="/dashboard/ToDoList/"
         className={({ isActive }) => (isActive ? styles.active : styles.item)}
       >
         ToDoList
       </NavLink>

       <div> </div>
       <div> </div>
       <NavLink
         to="/dashboard/Calculator/"
         className={({ isActive }) => (isActive ? styles.active : styles.item)}
       >
         Calculator
       </NavLink>
     </div>
   );
 };
 export { NavBar };
