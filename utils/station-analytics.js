"use strict";


const conversion = require("../utils/conversion");
const { get, values } = require("lodash");
const { loggers } = require("winston");
const logger = require("./logger");


const stationAnalytics = {
  getLatestReading(station) {
    let weatherConvert = null;
    let weatherIcon = null;
    let weatherIconColour = null;
    let temp = null;
    let tempF = null;
    let maxTemp = null;
    let minTemp = null;
    let tempTrend = null;
    let beaufort = null;
    let windDirection = null;
    let windChill = null;
    let maxWind = null;
    let minWind = null;
    let windTrend = null;
    let latestPressure = null ;
    let maxPressure = null;
    let minPressure = null;
    let pressureTrend = null;

    if (station.readings.length > 0) {
      const latestReading = {...station.readings [station.readings.length -1]};
      weatherConvert = conversion.weatherConvert(latestReading.code);
      latestReading.weatherConvert = weatherConvert;

      weatherIconColour = conversion.weatherIconColour(latestReading.code);
      latestReading.weatherIconColour = weatherIconColour;
      logger.info(" weatherIconColour;" +  weatherIconColour);

      weatherIcon = conversion.weatherIcon(latestReading.code);
      latestReading.weatherIcon = weatherIcon;

      temp = latestReading.temperature ;
      logger.info("temp;" + latestReading.temperature);

      tempF = conversion.tempConvertToF(latestReading.temperature);
      latestReading.tempF  = tempF.toFixed(1);
      logger.info("tempF;" + tempF);

      maxTemp = stationAnalytics.getMaxTemp(station);
      latestReading.maxTemp = maxTemp;
      logger.info("Max temp;" + maxTemp);

      minTemp = stationAnalytics.getMinTemp(station);
      latestReading.minTemp = minTemp;
      logger.info("min temp;" + minTemp);
      tempTrend = stationAnalytics.getTempTrend(station);
      latestReading.tempTrend = tempTrend;

      beaufort = conversion.beaufort(latestReading.windSpeed);
      latestReading.beaufort = beaufort;

      windDirection = conversion.windDirectionConvert(latestReading.windDirection);
      latestReading.windDirection = windDirection;

      windChill = conversion.windChillConvert(latestReading.temperature, latestReading.windSpeed);
      latestReading.windChill = windChill.toFixed(2);
      logger.info("ほいwindChill;" + windChill);

      maxWind = stationAnalytics.getMaxWind(station);
      latestReading.maxWind = maxWind;
      logger.info("Max Wind;" + maxWind);

      minWind = stationAnalytics.getMinWind(station);
      latestReading.minWind = minWind;

      windTrend = stationAnalytics.getWindTrend(station);
      latestReading.windTrend = windTrend;

      latestPressure = latestReading.pressure ;
      logger.info("pressure;" + latestReading.pressure);

      maxPressure = stationAnalytics.getMaxPressure(station);
      latestReading.maxPressure = maxPressure;

      minPressure = stationAnalytics.getMinPressure(station);
      latestReading.minPressure = minPressure;

      pressureTrend = stationAnalytics.getPressureTrend(station);
      latestReading.pressureTrend = pressureTrend;
      logger.info("pressureTrend;" + latestReading.pressureTrend);
      return latestReading;
    }

  },



  getMinTemp(station) {
    let minTemp = null;
    if (station.readings.length > 0) {
      minTemp = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature < minTemp) {
          minTemp = station.readings[i].temperature;
        }
      }
      return minTemp;
    }
  },

  getMaxTemp(station) {
    let maxTemp = null;
    if (station.readings.length > 0) {
      maxTemp = station.readings[0].temperature;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].temperature > maxTemp) {
          maxTemp = station.readings[i].temperature;
        }
      }
      return maxTemp;
    }
  },
  getTempTrend(station) {
    let trend = null;
    if (station.readings.length > 0) {
      if (station.readings.length > 1) {
        if (station.readings[station.readings.length - 2].temperature < station.readings[station.readings.length - 1].temperature) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 2].temperature > station.readings[station.readings.length - 1].temperature) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
      if (station.readings.length > 2) {
        if (station.readings[station.readings.length - 3].temperature < station.readings[station.readings.length - 2].temperature && station.readings[station.readings.length - 2].temperature < station.readings[station.readings.length - 1].temperature) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 3].temperature > station.readings[station.readings.length - 1].temperature && station.readings[station.readings.length - 2].temperature > station.readings[station.readings.length - 1].temperature) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
    }
    return trend;
  },

  getMinWind(station) {
    let minWind = null;
    if (station.readings.length > 0) {
      minWind = station.readings[0].windSpeed;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed < minWind) {
          minWind = station.readings[i].windSpeed;
        }
      }
      return minWind;
    }
  },

  getMaxWind(station) {
    let maxWind = null;
    if (station.readings.length > 0) {
      maxWind = station.readings[0].windSpeed;
      for (let i = 1; i < station.readings.length; i++) {
        if (station.readings[i].windSpeed > maxWind) {
          maxWind = station.readings[i].windSpeed;
        }
      }
      return maxWind;
    }
  },
  getWindTrend(station) {
      let trend = null;
    if (station.readings.length > 0) {
      if (station.readings.length > 1) {
        if (station.readings[station.readings.length - 2].windSpeed < station.readings[station.readings.length - 1].windSpeed) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 2].windSpeed > station.readings[station.readings.length - 1].windSpeed) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
      if (station.readings.length > 2) {
        if (station.readings[station.readings.length - 3].windSpeed < station.readings[station.readings.length - 2].windSpeed && station.readings[station.readings.length - 2].windSpeed < station.readings[station.readings.length - 1].windSpeed) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 3].windSpeed > station.readings[station.readings.length - 2].windSpeed && station.readings[station.readings.length - 2].windSpeed > station.readings[station.readings.length - 1].windSpeed) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
    }
    return trend;
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure < minPressure) {
          minPressure = station.readings[i].pressure;
        }
      }
    }
    return minPressure;
  },

  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = station.readings[0].pressure;
      for (let i = 0; i < station.readings.length; i++) {
        if (station.readings[i].pressure > maxPressure) {
          maxPressure = station.readings[i].pressure;
        }
      }
    }
    return maxPressure;
  },


  getPressureTrend(station) {
    let trend = null;
    if (station.readings.length > 0) {
      if (station.readings.length > 1) {
        if (station.readings[station.readings.length - 2].pressure < station.readings[station.readings.length - 1].pressure) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 2].pressure > station.readings[station.readings.length - 1].pressure) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
      if (station.readings.length > 2) {
        if (station.readings[station.readings.length - 3].pressure < station.readings[station.readings.length - 2].pressure && station.readings[station.readings.length - 2].pressure < station.readings[station.readings.length - 1].pressure) {
          trend = "arrow up";
        } else if (station.readings[station.readings.length - 3].pressure > station.readings[station.readings.length - 2].pressure && station.readings[station.readings.length - 2].pressure > station.readings[station.readings.length - 1].pressure) {
          trend = "arrow down";
        } else {
          trend = "minus";
        }
      }
    }
    return trend;
  },


};

module.exports = stationAnalytics;
