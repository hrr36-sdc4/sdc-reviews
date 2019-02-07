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

exports.seed = async function(knex, Promise) {
  // each customer review
  const fakeUsers = [];
  const desiredFakeUsers = 100;
  for (let i = 0; i < desiredFakeUsers; i++) {
    fakeUsers.push(createFakeUser());
  }
  await knex("reviews").insert(fakeUsers);
};

// exports.seed = function(knex, Promise) {
//   // Deletes ALL existing entries
//   return knex("reviews")
//     .del()
//     .then(function() {
//       // Inserts seed entries
//       return knex("reviews").insert([
//         {
//           username: "Missy Elliot",
//           created_at: "2017-04-20 12:29:45.964056",
//           image_url: "$argon2d$m=4096,t=3,p=1$JGFyZ29uMmQkb[...]",
//           user_rating: 6,
//           accuracy: 5,
//           communication: 5,
//           cleanliness: 5,
//           location: 5,
//           check_in: 5,
//           value: 5,
//           listing_id: 5
//         }
//       ]);
//     });
// };
