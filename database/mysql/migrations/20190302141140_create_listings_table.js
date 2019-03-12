exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('listings', function (table) {
      table.increments('listing_id').primary();
      table.text('description');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([knex.schema.dropTable('listings')]);
};
