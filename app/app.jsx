var React = require("react");
var ReactDOM = require("react-dom");
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("./components/Main");
var Weather = require("./components/Weather");
var About = require("./components/About");
var Examples = require("./components/Examples");
// Load foundation
require("style-loader!css-loader!foundation-sites/dist/css/foundation.min.css");
$("document").foundation();
// Load custom css
require("style-loader!css-loader!./styles/app.css");
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}></Route>
      <Route path="examples" component={Examples}></Route>
      <IndexRoute component={Weather} />
    </Route>
  </Router>,
  document.getElementById("app")
);
