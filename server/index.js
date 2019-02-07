const express = require("express");
const app = express();
const db = require("../database-pg/index.js");
const bodyParser = require("body-parser");
const { findMostRecent10 } = require("../database-pg/index.js");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/rooms/reviews", function(req, res) {
  console.log("Inside server for post request");

  findMostRecent10().then(records => {
    // console.log("here are the records ", records);
    console.log("retrieved reviews from DB!!!");
    return res.status(200).send(records);
  });
});

app.listen(port);
console.log("Listening on port", port);
