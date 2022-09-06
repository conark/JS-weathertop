"use strict";

const accounts = require("./accounts.js");
const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");

const stationAnalytics = require("../utils/station-analytics");
//const axios = require("axios");

const dashboard = {
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);

    let stationSort = stationStore.getUserStations(loggedInUser.id).sort(function (a,b){
      return a.name.localeCompare(b.name);
    });
    const stationData = stationSort.map((station)=>{
      return {
        ...station,
        latestReading: stationAnalytics.getLatestReading(station),
      }
    })

    logger.info(" Stations stationSort: ");


    const viewData = {

      title: "Station Dashboard",
      stations: stationData,//stationStore.getUserStations(loggedInUser.id),

      getLatestReading: stationAnalytics.getLatestReading,
    };
    logger.info("dashboard to render!!", stationStore.getUserStations(loggedInUser.id));
    logger.info(" latestReading", stationAnalytics.getLatestReading);
    response.render("dashboard", viewData);
  },

  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect("/dashboard");
  },

  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      latitude: request.body.latitude,
      longitude: request.body.longitude,
      readings: []
    };
    logger.debug("Creating a new Station", newStation);
    stationStore.addStation(newStation);
    response.redirect("/dashboard");
  },

};

module.exports = dashboard;