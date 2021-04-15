const chalk = require("chalk");
const fs = require("fs");

const addUser =  (user) {
  const usersExist = loadUsers();
  console.log(usersExist);
};

const loadUsers = () => {
  try {
    const buffer = fs.readFileSync("users.json");
    const jsonUsers = buffer.toString();
    const users = JSON.parse(jsonUsers);
    return users;
  } catch (e) {
    return []
  }
};

module.exports = {
  loadUsers: loadUsers,
  addUser: addUser,
};
