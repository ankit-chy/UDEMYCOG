//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req, res){

var today = new Date();
var currentDay = today.getDate();

if(currentDay == 0 || currentDay == 6){
  res.write("<h1>Yay! it's Weekend!</h1>");
} else {
    res.sendFile(__dirname + "/index.html");  
}
});

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
