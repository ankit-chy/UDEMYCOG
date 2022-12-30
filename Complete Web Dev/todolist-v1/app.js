//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("view engine", "ejs");

app.get("/", function (req, res) {

  var today = new Date();
  var currentDay = today.getDate();
  var day = "";

  if (currentDay == 0 || currentDay == 6) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }
  res.render("list", {kindOfDay: day});

});


app.listen(3000, function () {
  console.log("Server started on port 3000.");
})