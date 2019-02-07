var express = require("express");
var app = express();
var db = require("../database-pg/index.js");

var port = 3000;

app.listen(port);
console.log("Listening on port", port);
