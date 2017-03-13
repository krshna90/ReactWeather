var React = require("react");
var {Link, IndexLink} = require("react-router");
var Nav = React.createClass({
  render : function(){
    return (
      <div className="top-bar">
        <nav className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">
              React Weather
            </li>
            <li>
              <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight : "bold"}} style={{textDecoration : "none"}}>Get Weather</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active" activeStyle={{fontWeight : "bold"}}>About US</Link>
            </li>
            <li>
              <Link to="/examples" activeClassName="active" activeStyle={{fontWeight : "bold"}}> Examples</Link>
            </li>
          </ul>
        </nav>
        <div className="top-bar-right">
          <ul className="menu">
            <li><input type="search" placeholder="Search weather by city" /></li>
            <li><button type="button" className="button">Search</button></li>
          </ul>
        </div>
      </div>
      );

  }
});
module.exports = Nav;
