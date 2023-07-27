 import React, { useEffect, useState } from "react";
 import styles from "../cssModules/Content.module.css";
 import styless from "../cssModules/Users.module.css";

 const Users = (props) => {
   const [allUsers, setAllUsers] = useState(['']);

   const getAllUsers = async () => {
     try {
       const response = await fetch('http://localhost:3001/allUsers');
       const jsonData = await response.json();
       setAllUsers (jsonData);
     } catch (err) {
       console.error(err.message)
     }
   }
   useEffect(()=> {
     getAllUsers();
   },[]) 
 console.log(allUsers)
   const UsersStateList = allUsers.map((u) => {
   return (
   <div className={styless.users}>
   <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" />
   {u.firstname + ' ' + u.lastname}
   </div>
   );
   });
   return (
     <div className={styles.content}>
       <div>{UsersStateList}</div>
     </div>
   );
 } 
 export { Users };
