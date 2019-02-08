var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

module.exports = knex;

const findMostRecent10 = function() {
  console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .orderBy("created_at", "desc")
    .limit(10)
    .then(records => {
      return records;
    });
  //   console.log(queryString);
};

const findMostRelevant10 = function() {
  console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .orderBy("user_rating", "desc")
    .limit(10)
    .then(records => {
      return records;
    });
  //   console.log(queryString);
};

knex.migrate.latest([config]);

module.exports = { findMostRecent10, findMostRelevant10 };
