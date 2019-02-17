const express = require("express");
const app = express();
const db = require("../database/index.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const {
  findMostRecent,
  findMostRelevant,
  findFilteredReviews
} = require("../database/index.js");

const port = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));

app.get("/rooms/reviews/recent", function(req, res) {
  console.log("Inside server for get request");

  findMostRecent().then(records => {
    console.log("retrieved recent reviews from DB!!!");
    return res.status(200).send(records);
  });
});

app.get("/rooms/reviews/relevant", function(req, res) {
  console.log("Inside server for relevant get request");
  findMostRelevant().then(records => {
    console.log("retrieved relevant reviews from DB!!!");
    return res.status(200).send(records);
  });
});

app.get("/rooms/reviews/filter", function(req, res) {
  console.log("on server side!!!");
  findFilteredReviews(req.query.data).then(records => {
    return res.status(200).send(records);
  });
});

app.listen(port);
console.log("Listening on port", port);
