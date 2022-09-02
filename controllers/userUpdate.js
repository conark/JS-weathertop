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
      title: 'Edit User info',
      user:user,

    };
    response.render("userupdate", viewData);
  },

  updateUser(request, response){
    const loggedInUser = accounts.getCurrentUser(request);
    logger.debug(`Updating user`);
    const updateUser = {
      firstname: request.body.firstName,
      lastname: request.body.lastName,
      email: request.body.email,
      password: request.body.password,
    };
    logger.info(`update user ＆＆＆＆＆`,request.body);
    userstore.update(loggedInUser,updateUser);
    response.cookie("station", "");
    response.redirect("/login");

  }
};

module.exports = userUpdate;
