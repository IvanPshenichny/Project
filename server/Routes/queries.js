const getAllUsers =
  "SELECT firstname, lastname, id, email, passwords FROM UserAuthData";
const getUserById = "SELECT * FROM UserAuthData WHERE id = $1";
const addUsers =
  "INSERT INTO UserAuthData (firstname, lastname, email, passwords) VALUES ($1, $2, $3, $4) RETURNING *";
const checkEmailExist = "SELECT * FROM UserAuthData WHERE email = $1";
const removeUsers = "DELETE FROM UserAuthData WHERE id = $1 ";
const updateUsers = "UPDATE userauthdata SET firstname = $1 WHERE id = 2";
const getUser =
  "SELECT firstname, lastname, email FROM UserAuthData WHERE id = $1";

module.exports = {
  getAllUsers,
  getUserById,
  checkEmailExist,
  addUsers,
  removeUsers,
  updateUsers,
  getUser,
};
