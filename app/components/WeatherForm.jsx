var React = require("react");
var WeatherForm = React.createClass({
  onFormSubmit : function(e){
    e.preventDefault();
    var cityObj = this.refs.city;
    var city=cityObj.value;
    if(typeof city === "string" && city.length > 0){
      cityObj.value = "";
      this.props.onSearchLocation(city);
    }
  },
  render : function(){
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref="city" name="city"></input>
          <button className="hollow button expanded" >Get Weather</button>
        </form>
      </div>

    );
  }
});
module.exports = WeatherForm;
