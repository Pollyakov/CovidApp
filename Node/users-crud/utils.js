const fs = require("fs");

const add = (user) => {
  const usersData = load();
  const duplicateUser = usersData.find(
    (el) => el.email === user.email || el.name === user.name
  );
  if (duplicateUser) {
    console.log("email alrerady exists");
  } else {
    usersData.push(user);
    save(usersData);
  }
};

const remove = (id) => {
  const usersData = load();
  const removeUser = usersData.filter((el) => el.id !== id);

  if (usersData.length !== removeUser.length) {
    save(removeUser);
  } else {
    console.log("couldn't find user");
  }
};

const update = (id, name, email) => {
  const currentUsersData = load();

  //one way
  const userIndex = currentUsersData.findIndex((el) => el.id === id);
  const user = currentUsersData.find((el) => el.id === id);
  console.log(userIndex);
  if (userIndex !== -1) {
    const editedUser = {
      ...user,
      name: name || user.name,
      email: email || user.email,
    };
    currentUsersData.splice(user, 1, editedUser);
    save(currentUsersData);
  }
  //another way
  //   const user = currentUsersData.find((el) => el.id === id);
  //   if (user) {
  //     const editedUser = {
  //       ...user,
  //       name: name || user.name,
  //       email: email || user.email,
  //     };
  //     remove(id);
  //     const usersData = load();
  //     usersData.push(editedUser);
  //     save(usersData);
  //   } else {
  //     console.log("user not found");
  //   }
};
const read = (id) => {
  const usersData = load();
  const user = usersData.find((el) => el.id === id);
  if (user) {
    console.log(user);
  } else {
    console.log("user doesnt exsits");
  }
};

const load = () => {
  try {
    const dataJSON = fs.readFileSync("users.json", "utf-8");
    const data = JSON.parse(dataJSON);
    return data;
  } catch (e) {
    return [];
  }
};


const save = (users) => {
  const dataJSON = JSON.stringify(users);
  fs.writeFileSync("users.json", dataJSON);
};

module.exports = {
  add,
  remove,
  update,
  read,
};
