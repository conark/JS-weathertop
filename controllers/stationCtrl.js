"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const stationAnalytics = require("../utils/station-analytics");
const uuid = require("uuid");

const stationCtrl = {
  index(request, response) {
    const id = request.params.id;
    logger.debug("Station id = ", id);
    const station = stationStore.getStation(id);
    const viewData = {
      title: "Station",
      station: station,
 /*     stationSummary : {
        shortestReading : stationAnalytics.getShortestReading(station),
        duration : stationAnalytics.getStationDuration(station)
      }*/
    };
    response.render("station", viewData);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingId;
    logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const date = new Date();
 //   const station = stationStore.getStation(stationId);
    const newReading = {
      id: uuid.v1(),
      date: date,
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      windDirection: request.body.windDirection,
      pressure: request.body.pressure
    };
    logger.debug("New Reading = ", newReading);
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  }
};

module.exports = stationCtrl;
