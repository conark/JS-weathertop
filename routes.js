"use strict";

const express = require("express");
const router = express.Router();

const accounts = require("./controllers/accounts.js");
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const stationCtrl = require("./controllers/stationCtrl.js");
const userUpdate = require("./controllers/userUpdate.js");

router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);


router.get("/dashboard", dashboard.index);


router.get("/dashboard/deletestation/:id", dashboard.deleteStation);
router.post("/dashboard/addstation", dashboard.addStation);

router.get("/about", about.index);

router.get("/station/:id", stationCtrl.index);
router.get("/station/:id/deletereading/:readingid", stationCtrl.deleteReading);

router.post("/station/:id/addreading/", stationCtrl.addReading);

router.get("/userUpdate/",  userUpdate.index);
router.post("/userupdate/:userid", userUpdate.updateUser);

module.exports = router;
