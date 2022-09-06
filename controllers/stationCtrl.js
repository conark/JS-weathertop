
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
      station: stationStore.getStation(id),
    getLatestReading: stationAnalytics.getLatestReading(station),

};
response.render("station", viewData);
},

deleteReading(request, response) {
const stationId = request.params.id;
const readingId = request.params.readingid;
logger.debug(`Deleting Reading ${readingId} from Station ${stationId}`);
stationStore.removeReading(stationId, readingId);
response.redirect("/station/" + stationId);
},

addReading(request, response)  {
    const stationId = request.params.id;
 const date = new Date();
 const station = stationStore.getStation(stationId);
 const newReading = {
   id: uuid.v1(),
   date: date,
   code: Number(request.body.code),
   temperature: Number(request.body.temperature),
   windSpeed: Number(request.body.windSpeed),
   windDirection: Number(request.body.windDirection),
   pressure: Number(request.body.pressure)
 };
logger.debug("New Reading = ", newReading);
stationStore.addReading(stationId, newReading);
response.redirect("/station/" + stationId);
}
};

module.exports = stationCtrl;
