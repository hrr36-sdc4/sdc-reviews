module.exports = {
  development: {
    client: "postgresql",
    connection: {
      // database: "reviews"
      host: "127.0.0.1",
      database: "reviews",
      port: parseInt(process.env.PG_PORT) || 5432
    },
    migrations: {
      directory: __dirname + "/database/migrations"
    },
    seeds: {
      directory: __dirname + "/database/seeds"
    }
  },

  staging: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      database: "reviews",
      port: parseInt(process.env.PG_PORT) || 5432
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      host: "127.0.0.1",
      database: "reviews",
      port: parseInt(process.env.PG_PORT) || 5432
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
