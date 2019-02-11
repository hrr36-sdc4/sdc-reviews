var config = require("../knexfile.js");
var env = "development";
var knex = require("knex")(config[env]);

module.exports = knex;

const findMostRecent = function() {
  console.log("accessing postgres db.....");
  return knex
    .from("reviews")
    .orderBy("created_at", "desc")
    .then(records => {
      return records;
    });
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
};

const findFilteredReviews = function(query) {
  return knex
    .from("reviews")
    .where("description", "like", `%${query}%`)
    .then(records => {
      return records;
    });
};

knex.migrate.latest([config]);

module.exports = { findMostRecent, findMostRelevant10, findFilteredReviews };
