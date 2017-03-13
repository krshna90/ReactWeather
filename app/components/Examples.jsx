var React = require("react");
var {Link} = require("react-router");
var Examples = React.createClass({
  render : function(){
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>here are few examples you can try:</p>
        <ol>
          <li>
            <Link to="/?location=Delhi">Delhi, IN</Link>
          </li>
          <li>
            <Link to="/?location=London">London, UK</Link>
          </li>
          <li>
            <Link to="/?location=Rio">Rio, Brazil</Link>
          </li>
        </ol>
      </div>

    );
  }
});
module.exports = Examples;
