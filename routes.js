"use strict";

const express = require("express");
const router = express.Router();

const start = require("./controllers/start.js")
const accounts = require("./controllers/accounts.js");
const dashboard = require("./controllers/dashboard.js");
const about = require("./controllers/about.js");
const stationCtrl = require("./controllers/stationCtrl.js");
const userUpdate = require("./controllers/userUpdate");


router.get("/", start.index);
router.get("/", accounts.index);
router.get("/login", accounts.login);
router.get("/signup", accounts.signup);
router.get("/logout", accounts.logout);
router.post("/register", accounts.register);
router.post("/authenticate", accounts.authenticate);


router.get("/dashboard", dashboard.index);
router.get("/dashboard/deleteStation/:id", dashboard.deleteStation);
router.post("/dashboard/addStation", dashboard.addStation);

router.get("/updateInfo", userUpdate.index);
router.post("/updateInfo", userUpdate.updateInfo);

router.get("/about", about.index);
router.get("/stationCtrl/:id", stationCtrl.index);
router.get("/stationCtrl/:id/deleteReading/:readingId", stationCtrl.deleteReading);
router.post("/stationCtrl/:id/addReading", stationCtrl.addReading);


module.exports = router;
