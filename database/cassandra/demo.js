var models = require('express-cassandra');
var faker = require('faker');

//Tell express-cassandra to use the models-directory, and
//use bind() to load the models using cassandra configurations.
models.setDirectory(__dirname + '/models').bind({
    clientOptions: {
      contactPoints: ['127.0.0.1'],
      protocolOptions: {
        port: 9042
      },
      keyspace: 'honeyjar',
      queryOptions: {
        consistency: models.consistencies.one
      }
    },
    ormOptions: {
      defaultReplicationStrategy: {
        class: 'SimpleStrategy',
        replication_factor: 1
      },
      migration: 'safe',
    }
  },
  function (err) {
    seedReviews();
    if (err) throw err;
  },
);

function seedReviews() {

  const _count = 1;

  for (let i = 0; i < _count; i += 1) {
    const review = new models.instance.Review({
      review_id: i,
      age: faker.random.number({
        min: 10,
        max: 100
      }),
      city: faker.address.city(),
      email: faker.internet.email(),
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
    });


    review.saveAsync()
      .then(function () {
        console.log('Yuppiie!');
      })
      .catch(function (err) {
        console.log(err);
      });
  }
}


// var cassandra = require('cassandra-driver');
// var async = require('async');

// var client = new cassandra.Client({
//   localDataCenter: 'datacenter1',
//   contactPoints: ['127.0.0.1'],
//   keyspace: 'demo'
// });

// // Use async series to run functions in serial(one after another)
// async.series([
//   // Insert Bob
//   function (callback) {
//     client.execute("INSERT INTO users (lastname, age, city, email, firstname) VALUES ('Jones', 35, 'Austin', 'bob@example.com', 'Bob')", function (err, result) {
//       // Run next function in series
//       callback(err, null);
//     });
//   },
// ], function (err, results) {
//   // All finished, quit
//   console.log(err);
//   process.exit();
// });
//
// const faker = require("faker");

// const cassanKnex = require("cassanknex")({
//   connection: {
//     localDataCenter: "datacenter1",
//     contactPoints: ["127.0.0.1"]
//   }
// });

// cassanKnex.on("ready", err => {
//   if (err) {
//     console.error("Error Connecting to Cassandra Cluster", err);
//   } else {
//     console.log("Cassandra Connected");

//     // get the Cassandra Driver
//     const client = cassanKnex.getClient();
//   }

//   const _count = 1400;

//   for (let i = 0; i < _count; i++) {
//     let fakeAge = faker.random.number({
//       min: 10,
//       max: 100
//     });
//     let fakeCity = faker.address.city();
//     let fakeEmail = faker.internet.email();
//     let fakefirstName = faker.name.firstName();
//     let fakelastName = faker.name.lastName();
//     let item = {
//       age: fakeAge,
//       city: fakeCity,
//       email: fakeEmail,
//       firstname: fakefirstName,
//       lastname: fakelastName
//     };

//     // var qb = cassanKnex("demo")
//     //   .insert(item)
//     //   .into("users")
//     //   .exec(function (err, result) {
//     //     console.log(err);
//     //   });
//   }

//   const _counter = 400;
//   let qb = [];

//   for (let i = 0; i < _counter; i++) {
//     let fakeAge = faker.random.number({
//       min: 10,
//       max: 100
//     });
//     let fakeCity = faker.address.city();
//     let fakeEmail = faker.internet.email();
//     let fakefirstName = faker.name.firstName();
//     let fakelastName = faker.name.lastName();
//     let item = {
//       age: fakeAge,
//       city: fakeCity,
//       email: fakeEmail,
//       firstname: fakefirstName,
//       lastname: fakelastName
//     };

//     qb[i] = cassanKnex("demo")
//       .insert(item)
//       .into("users");
//   }

//   cassanKnex().batch(
//     {
//       prepare: true
//     },
//     qb,
//     function(err, res) {
//       console.log(err);
//       console.log(res);
//     }
//   );
// });
// var cassandra = require('cassandra-driver');
// var async = require('async');

// var client = new cassandra.Client({
//   localDataCenter: 'datacenter1',
//   contactPoints: ['127.0.0.1'],
//   keyspace: 'demo'
// });

// Use async series to run functions in serial(one after another)
// async.series([
//   // Insert Bob
//   function (callback) {
//     client.execute("INSERT INTO users (lastname, age, city, email, firstname) VALUES ('Jones', 35, 'Austin', 'bob@example.com', 'Bob')", function (err, result) {
//       // Run next function in series
//       callback(err, null);
//     });
//   },
//   // Read users and print to console
//   function (callback) {
//     client.execute("SELECT lastname, age, city, email, firstname FROM users WHERE lastname='Jones'", function (err, result) {
//       if (!err) {
//         if (result.rows.length > 0) {
//           var user = result.rows[0];
//           console.log("name = %s, age = %d", user.firstname, user.age);
//         } else {
//           console.log("No results");
//         }
//       }

//       // Run next function in series
//       callback(err, null);
//     });
//   },
//   // Update Bob's age
//   function (callback) {
//     client.execute("UPDATE users SET age = 36 WHERE lastname = 'Jones'", function (err, result) {
//       // Run next function in series
//       console.log(err);
//       callback(err, null);
//     });
//   },
//   // Read users and print to the console
//   function (callback) {
//     client.execute("SELECT firstname, age FROM users where lastname = 'Jones'", function (err, result) {
//       var user = result.rows[0];
//       console.log("name = %s, age = %d", user.firstname, user.age);

//       // Run next function in series
//       callback(err, null);
//     });
//   },
//   // Delete Bob
//   function (callback) {
//     client.execute("DELETE FROM demo.users WHERE lastname = 'Jones' ", function (err, result) {
//       if (!err) {
//         console.log("Deleted");
//       }

//       // Run next function in series
//       callback(err, null);
//     });
//   },
//   // Read users and print to the console
//   function (callback) {
//     client.execute("SELECT * FROM users WHERE lastname='Jones'", function (err, result) {
//       if (result.rows.length > 0) {
//         var user = result.rows[0];
//         console.log("name = %s, age = %d", user.firstname, user.age);
//       } else {
//         console.log("No records");
//       }

//       // Run next function in series
//       callback(err, null);
//     });
//   }
// ], function (err, results) {
//   // All finished, quit
//   console.log(err);
//   process.exit();
// });
