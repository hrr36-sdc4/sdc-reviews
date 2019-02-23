const faker = require("faker");

const createFakeUser = () => ({
  username: faker.name.findName(),
  created_at: faker.date.past(),
  description: faker.lorem.sentences(),
  image_url: faker.image.avatar(),
  user_rating: faker.random.number({
    min: 0,
    max: 100
  }),
  accuracy: faker.random.number({
    min: 3,
    max: 5
  }),
  communication: faker.random.number({
    min: 3,
    max: 5
  }),
  cleanliness: faker.random.number({
    min: 3,
    max: 5
  }),
  location: faker.random.number({
    min: 3,
    max: 5
  }),
  check_in: faker.random.number({
    min: 1,
    max: 5
  }),
  value: faker.random.number({
    min: 2,
    max: 5
  }),
  listing_id: faker.random.number({
    min: 0,
    max: 10
  })
});

function makeFakeUsers() {
  const fakeUsers = [];
  const desiredFakeUsers = 100;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  return fakeUsers;
}

exports.seed = function(knex) {
  return knex("reviews")
    .del()
    .then(function() {
      return knex("reviews").insert(makeFakeUsers());
    });
};
