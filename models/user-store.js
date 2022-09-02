"use strict";

const _ = require("lodash");
const JsonStore = require("./json-store");
const logger = require("../utils/logger");

const userStore = {
  store: new JsonStore("./models/user-store.json", { users: [] }),
  collection: "users",

  getAllUsers() {
    return this.store.findAll(this.collection);
  },

  addUser(user) {
    this.store.add(this.collection, user);
    this.store.save();
  },

  getUserById(id) {
    return this.store.findOneBy(this.collection, { id: id });
  },

  getUserByEmail(email) {
    return this.store.findOneBy(this.collection, { email: email });
  },

  update(loggedInUser,updateUser) {
    loggedInUser.firstname = updateUser.firstname;
    loggedInUser.lastname = updateUser.lastname;
    loggedInUser.email = updateUser.email;
    loggedInUser.password = updateUser.password;
    logger.info(`UPDATED user `,updateUser);
    this.store.save();
  }



};

module.exports = userStore;
