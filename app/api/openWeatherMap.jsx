var axios = require("axios");
const OPEN_WEATHER_MAP_URL = "http://api.openweathermap.org/data/2.5/weather?appid=9ffb15e76762c30b1a03f9fde09f8a11&units=metric";
module.exports = {
  getTemp : function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;
    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      }else {
           return response.data.main.temp;
         }

    },function(response) {
      throw new Error (response.response.data.message);
      return response.response.data;

    });

  }
}
