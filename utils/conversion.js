"use strict"

const conversion = {

  weatherConvert(code) {
    if (code === 100) {
      return "Clear";
    } else if (code === 200) {
      return "Partial clouds";
    } else if (code === 300) {
      return "Cloudy";
    } else if (code === 400) {
      return "Light Showers";
    } else if (code === 500) {
      return "Heavy Showers";
    } else if (code === 600) {
      return "Rain";
    } else if (code === 700) {
      return "Snow";
    } else if (code === 800) {
      return "Thunder";
    } else {
      return "No Reading !";
    }
  },
    weatherIcon(code){
      if (code === 100){
        return "sun";
      }
      else if (code === 200){
        return "cloud sun";
      }
      else if (code === 300){
        return "cloud";
      }
      else if (code === 400){
        return "cloud sun rain";
      }
      else if (code === 500){
        return "cloud showers heavy";
      }
      else if (code === 600){
        return "cloud rain";
      }
      else if (code === 700){
        return "snowflake";
      }
      else if (code === 800){
        return "bolt";
      }
      else{
        return "No Reading !";
      }

    },
  weatherIconColour(code){
    if (code === 100){
      return "red";
    }
    else if (code === 200){
      return "grey";
    }
    else if (code === 300){
      return "grey";
    }
    else if (code === 400){
      return "blue";
    }
    else if (code === 500){
      return "blue";
    }
    else if (code === 600){
      return "blue";
    }
    else if (code === 700){
      return "blue";
    }
    else if (code === 800){
      return "yellow";
    }
    else{
      return "No Reading !";
    }

  },


    tempConvertToF(temperature) {
      console.log("temp:", temperature)
      return temperature * 1.8 + 32;
    },

   beaufort(windSpeed) {
    if (windSpeed === 0) {
      return 0;
    } else if (windSpeed >= 1 && windSpeed <= 6) {
      return 1;
    } else if (windSpeed >= 7 && windSpeed <= 11) {
      return 2;
    } else if (windSpeed >= 12 && windSpeed <= 19) {
      return 3;
    } else if (windSpeed >= 20 && windSpeed <= 29) {
      return 4;
    } else if (windSpeed >= 30 && windSpeed <= 39) {
      return 5;
    } else if (windSpeed >= 40 && windSpeed <= 50) {
      return 6;
    } else if (windSpeed >= 51 && windSpeed <= 62) {
      return 7;
    } else if (windSpeed >= 63 && windSpeed <= 75) {
      return 8;
    } else if (windSpeed >= 76 && windSpeed <= 87) {
      return 9;
    } else if (windSpeed >= 88 && windSpeed <= 102) {
      return 10;
    } else if (windSpeed >= 103 && windSpeed <= 117) {
      return 11;
    } else if (windSpeed >= 117) {
      return 12;
    }
    return -1;
  },

    windDirectionConvert(windDirection) {
    console.log("Wind Direction:", windDirection)
      if (windDirection > 348.75 && windDirection <= 11.25){
        return "N";
      }
      else if (windDirection >= 11.25 && windDirection <= 33.75){
        return "NNE";
      }
      else if (windDirection >= 33.75 && windDirection < 56.25){
        return "NE";
      }
      else if (windDirection >= 56.25 && windDirection < 78.75){
        return "ENE";
      }
      else if (windDirection >= 78.75 && windDirection < 101.25){
        return "E";
      }
      else if (windDirection >= 101.25 && windDirection < 123.75){
        return "ESE";
      }
      else if (windDirection >= 123.75 && windDirection < 146.25){
        return "SE";
      }
      else if (windDirection >= 146.25 && windDirection < 168.75){
        return "SSE";
      }
      else if (windDirection >= 168.75 && windDirection < 191.25){
        return "S";
      }
      else if (windDirection >= 191.25 && windDirection < 213.75){
        return "SSW";
      }
      else if (windDirection >= 213.75 && windDirection < 236.25){
        return "SW";
      }
      else if (windDirection >= 236.25 && windDirection < 258.75){
        return "WSW";
      }
      else if (windDirection >= 258.75 && windDirection < 281.25){
        return "W";
      }
      else if (windDirection >= 281.25 && windDirection < 303.75){
        return "WNW";
      }
      else if (windDirection >= 303.75 && windDirection < 326.25){
        return "NW";
      }
      else if (windDirection >= 326.25 && windDirection <= 348.75){
        return "NNW";
      }
      else{
        return "No Reading !";
      }

    },

    windChillConvert (temperature, windSpeed){
     return (13.12 + (0.6215 * temperature) - 11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temperature * Math.pow(windSpeed, 0.16));

    }




};

module.exports= conversion;