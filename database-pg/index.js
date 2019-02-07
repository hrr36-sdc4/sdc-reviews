var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

module.exports = knex;

const findMostRecent10 = function() {
  console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .limit(10)
    .then(records => {
      return records;
    });
  //   console.log(queryString);
};

knex.migrate.latest([config]);

module.exports = { findMostRecent10 };
