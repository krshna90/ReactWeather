var React = require("react");
var WeatherMessage = React.createClass({
  render : function(){
    var city = this.props.city;
    var temp = this.props.temp;
    return (
      <div>
        <h1>Its {city} {temp} Degree Celcius</h1>
      </div>

    );
  }
});
module.exports = WeatherMessage;
