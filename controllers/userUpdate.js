"use strict";

const userstore = require("../models/user-store");
const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const uuid = require("uuid");

const userUpdate = {
  index(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const user = userstore.getUserByEmail(loggedInUser.email);
    logger.debug(`User update`);
    const viewData = {
      title: "Edit User info",

    };
    response.render("userUpdate", viewData);
  },

  updateUser(request, response){
    const loggedInUser = accounts.getCurrentUser(request);
    logger.debug(`Updating user`);
    const newUser = {
      firstname: request.body.firstname,
      lastname: request.body.lastname,
      email: request.body.email,
      password: request.body.password,
    };
    logger.info(`update user ${loggedInUser}`);
    userstore.update(loggedInUser,newUser);
    response.cookie("station", "");
    response.redirect("/");

  }
};

module.exports = userUpdate;
