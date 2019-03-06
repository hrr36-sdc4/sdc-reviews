exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable("reviews", function (table) {
      table.increments("review_id").primary();
      table.integer("accuracy");
      table.integer("check_in");
      table.integer("cleanliness");
      table.integer("communication");
      table.timestamp("created_at");
      table.string("description", 1000);
      table.text("image_url");
      table.integer("listing_id");
      table.integer("location");
      table.integer("user_rating");
      table.text("username");
      table.integer("value");
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable("reviews")]);
};
