var React = require("react");
var WeatherMessage = React.createClass({
  render : function(){
    var city = this.props.city;
    var temp = this.props.temp;
    return (
      <div>
        <h3 className="text-center">Its {temp} Degree Celcius in {city} </h3>
      </div>

    );
  }
});
module.exports = WeatherMessage;
