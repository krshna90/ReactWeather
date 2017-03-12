var express = require("express");

var app = express();
const PORT = process.env.PORT || 3000;
//Redirect request
app.use(function(req, res, next){
  // if(req.headers["x-forwarded-proto"] === "http"){
  //   next();
  // }else{
  //   res.redirect("http://" + req.hostname + req.url)
  // }
  if(req.secure){
    res.redirect("http://" + req.hostname + req.url);
  }else {
    next();
  }
});
app.use(express.static("public"));
app.listen(PORT, function(){
  console.log("Server up and running for New React App at port:3000");
});
