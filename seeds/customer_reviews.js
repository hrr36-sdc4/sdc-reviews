exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("reviews")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("reviews").insert([
        {
          username: "Missy Elliot",
          created_at: "2017-04-20 12:29:45.964056",
          image_url: "$argon2d$m=4096,t=3,p=1$JGFyZ29uMmQkb[...]",
          user_rating: 6,
          accuracy: 5,
          communication: 5,
          cleanliness: 5,
          location: 5,
          check_in: 5,
          value: 5,
          listing_id: 5
        }
      ]);
    });
};
