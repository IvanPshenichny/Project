import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { NavBar } from "./NavBar";
import { Content } from "./Content";
import styless from "../cssModules/NavBarContextArea.module.css";
import styles from "../cssModules/App.module.css";

const Dashboard = (props) => {
  const [name, setName] = useState("");
  async function getName() {
    try {
      const response = await fetch("http://localhost:3001/dashboard/", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseResponse = await response.json();
      setName(parseResponse.firstname + " " + parseResponse.lastname);
    } catch (err) {
      console.error(err.message);
    }
  }
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    props.setAuthentification(false);
  };
  useEffect(() => {
    getName();
  }, []);
  const [users, setUsers] = useState([]);

  async function getAllUsers() {
    try {
      const response = await fetch("http://localhost:3001/allUsers", {
        method: "GET",
        headers: { token: localStorage.token },
      });
      const parseResponse = await response.json();
      setUsers(parseResponse.firstname + " " + parseResponse.lastname);
      console.log([users]);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <div className={styles.app}>
      <div>
        <Header logout = {logout} name = {name}/>
      </div>
      <div className={styless.NavBarContextArea}>
        <NavBar/>
        <Content/>
      </div>
    </div>
  );
  //
  //
  //     return (
  //         <div className={styles.app}>
  //             <div>
  //         <Header
  //         name = {name}
  //         logout = {logout}
  //         />
  //       </div>

  //     <div className={styles.app}>

  //         <div className={styless.NavBarContextArea}>
  //           <NavBar />
  //           <Content
  //           users = {users}
  //           name = {name}
  //           />

  //         </div>
  //     </div>
  //     </div>
  //     )
};

export default Dashboard;
