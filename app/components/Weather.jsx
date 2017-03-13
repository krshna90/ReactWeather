var React = require("react");
var WeatherForm = require("./WeatherForm");
var WeatherMessage= require("./WeatherMessage");
var openWeatherMap = require("../api/openWeatherMap");
var Weather = React.createClass({
  getInitialState : function(){
    return {
      city : null,
      temp : null,
      isLoading : false,
      errObj : {}
    }
  },
  getLocation : function(city){
    var VM = this;
    this.setState({
      isLoading : true
    });
    openWeatherMap.getTemp(city).then(function(data){
      VM.setState({
        city : city,
        temp : data,
        isLoading : false,
        isError : false
      });
    },
    function(data){
      VM.setState({
        isLoading : false,
        isError : true,
        errObj :  data
      });
    });
    console.log(this.state.city);
  },
  render : function(){
    var {city, temp, isLoading, isError, errObj } = this.state;
    function template(){
    if(isLoading){
      return <h1>Processing your request...</h1>
    }else if(isError){
      return <h1>{errObj.cod}{errObj.message} <br />Please try again</h1>;
    }else if(city && temp){
      return <WeatherMessage city={city} temp={temp}/>
    }
  }

    return (
      <div>
        <h1 className="text-center">Get Weather</h1>
        <WeatherForm onSearchLocation = {this.getLocation}/>
        {template()}
      </div>

    );
  }
});
module.exports = Weather;
