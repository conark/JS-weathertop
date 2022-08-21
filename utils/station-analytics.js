"use strict";


const conversion = require("./conversion");
const { get } = require("lodash");
const stationAnalytics = {


    latestReading(station) {
      if (station.readings.length > 0) {
        station.latestReading = station.readings.get(station.readings.length - 1);
      }
    },

      allStationAnalytics(station)
      {
        this.latestReading(station);
        this.weatherConvert (station.latestReading);
        this.weatherIcon (station.latestReading);
        this.tempConvertToF(station.latestReading);
        this.maxTemp (station);
       this.minTemp  (station);
      this.tempTrend (station);
      this.beaufort (station.latestReading);
      this.windDirectionConvert (station.latestReading);
      this.windChillConvert(station);
      this.maxWind (station);
      this.minWind (station);
      this.windTrend (station);
      this.maxPressure (station);
      this.minPressure (station);
      this.pressureTrend(station);

    },



        minTemp(station)
        {
          let minTemp = null;
          if (station.readings.length > 0) {
            minTemp = station.readings[0].temperature;
            for (let i = 0; i < station.readings.length; i++) {
              if (station.readings[i].temperature < minTemp.temperature) {
                minTemp = station.readings;
              }
            }
          }
          return minTemp;
        },

        maxTemp(station)
        {
          let maxTemp = null;
          if (station.readings.length > 0) {
            maxTemp = station.readings[0].temperature;
            for (let i = 0; i < station.readings.length; i++) {
              if (station.readings[i].temperature > maxTemp.temperature) {
                maxTemp = station.readings;
              }
            }
          }
          return maxTemp;
        },

        tempTrend(station) {
          let trend = 0;
          if (readings.length() > 2) {
            values[] = {readings.get(readings.length()-3).temperature, readings.get(readings.length()-2).temperature,
              readings.get(readings.length()-1).temperature};
            trend = calcTrend(values);
          }
          return trend;
        },


        minWind(station)
        {
          let minWind = null;
          if (station.readings.length > 0) {
            minWind = station.readings[0].windSpeed;
            for (let i = 0; i < station.readings.length; i++) {
              if (station.readings[i].windSpeed < minWind.windSpeed) {
                minWind = station.readings;
              }
            }
          }
          return minWind;
        },

        maxWind(station)
        {
          let maxWind = null;
          if (station.readings.length > 0) {
            maxWind = station.readings[0].windSpeed;
            for (let i = 0; i < station.readings.length; i++) {
              if (station.readings[i].windSpeed > maxWind.windSpeed) {
                maxWind = station.readings;
              }
            }
          }
          return maxWind;
        },
    windTrend(staion) {
      let trend = 0;
      if (staion.length() > 2) {
        const values = [station.readings.[station.readings.length()-3).pressure, station.readings.[station.readings.length()-2).pressure,
          staion.readings.(staion.readings.length()-1).pressure};
      trend = calcTrend(values);
    }
    return trend;
  },


    minPressure(station)
    {
      let minPressure = null;
      if (station.readings.length > 0) {
        minPressure = station.readings[0].pressure;
        for (let i = 0; i < station.readings.length; i++) {
          if (station.readings[i].pressure < minPressure.pressure) {
            minPressure = station.readings;
          }
        }
      }
      return minPressure;
    },

    maxPressure(station)
    {
      let maxPressure = null;
      if (station.readings.length > 0) {
        maxPressure = station.readings[0].pressure;
        for (let i = 0; i < station.readings.length; i++) {
          if (station.readings[i].pressure > maxPressure.pressure) {
            maxPressure = station.readings;
          }
        }
      }
      return maxPressure;
    },

            pressureTrend(staion) {
              let trend = 0;
              if (staion.length() > 2) {
                const values = [station.readings.[station.readings.length()-3).pressure, station.readings.[station.readings.length()-2).pressure,
                  staion.readings.(staion.readings.length()-1).pressure};
                trend = calcTrend(values);
              }
              return trend;
            },

            calcTrend(values) {
              let trend = 0;
              if (values.length > 2) {
                if (( values[2] > values[1] ) && (values[1] > values[0])) {
                  trend = 1;
                } else if (( values[2] < values[1] ) && (values[1] < values[0])) {
                  trend = -1;
                }
              }
              return trend;
            }

        /*shortestSong = playlist.songs[0];
        for (let i = 1; i < playlist.songs.length; i++) {
          if (playlist.songs[i].duration < shortestSong.duration) {
            shortestSong = playlist.songs[i];
          }
        }
        }
        return shortestSong;
        },

        getPlaylistDuration(playlist) {
        let playlistDuration = 0;
        for (let i = 0; i < playlist.songs.length; i++) {
        let song = playlist.songs[i];
        playlistDuration = playlistDuration + song.duration;
        }
        return playlistDuration;
        }*/

};

module.exports = stationAnalytics;
