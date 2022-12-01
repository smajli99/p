const uuid = require('uuid');
const {use} = require('./app');

const users = [
  {
    id: '996bcb75-f0cc-4cf0-afcd-5a491c13172a',
    username: 'john',
    email: 'john@matf.bg.ac.rs',
    password: 'john123',
    status: 'active',
  },

  {
    id: 'c0e4cdac-d240-4900-88b8-238e42199c96',
    username: 'pavle',
    email: 'pavle@gmail.com',
    password: 'pavle123',
    status: 'active',
  },

  {
    id: '2f7cc58a-84fb-4312-89b4-c24cfd43ab2d',
    username: 'maja',
    email: 'maja@gmail.com',
    password: 'maja123',
    status: 'inactive',
  },

  {
    id: '53eba886-e0dc-4bc6-9a75-89f66ffc0cef',
    username: 'klara',
    email: 'klara@gmail.com',
    password: 'klara123',
    status: 'active',
  },
];

const getAllUsers = () => {
  return users;
};

const getUserById = (id) => {
  const findUsers = users.filter((user) => user.id == id);
  return findUsers.length > 0 ? findUsers[0] : null;
};

const getUserByUsername = (username) => {
  const findUsers = users.filter((user) => user.username == username);
  return findUsers.length > 0 ? findUsers[0] : null;
};

const getUsersByStatus = (status) => {
  const usersWithStatus = users.filter((user) => user.status == status);
  return usersWithStatus;
};

const addNewUser = (username, email, password) => {
  let isAdded = false;

  const newUser = {
    id: uuid.v4(),
    username,
    email,
    password,
    status: 'active',
  };

  const user = getUserByUsername(username);

  if (user == null) {
    users.push(newUser);
    isAdded = true;
  }

  return isAdded;
};

const changeUserPassword = (username, oldPassword, newPassword) => {
  const foundUser = users.find(user => user.username == username && user.password == oldPassword);
  if (!foundUser) {
    return false;
  }

  foundUser.password = newPassword;
  return true;
};

const deleteUser = (username) => {
  const userIndex = users.findIndex(user => user.username == username);
  if (userIndex == -1) {
    return false;
  }
  
  users.splice(userIndex, 1);
  return true;
};

module.exports = {
  getAllUsers,
  getUserById,
  getUserByUsername,
  getUsersByStatus,
  addNewUser,
  changeUserPassword,
  deleteUser,
};
