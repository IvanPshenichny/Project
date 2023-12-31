const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const jwtAuth = require("./Routes/jwtAuth");
const dashboard = require("./Routes/dashboard");
const allUsers = require("./Routes/allUsers");
const deleteUsers = require("./Routes/deleteUsers");
const updateUsers = require("./Routes/updateUsers");
const PORT = 3001;

app.use(express.json()); //req.body
app.use(cors());

// register and login routes

app.use("/auth/", jwtAuth);
app.use("/dashboard", dashboard);
app.use("/allUsers", allUsers);
app.use("/deleteUsers/:id", deleteUsers);
app.put("/updateUsers/:id", updateUsers);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`server has been started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();
