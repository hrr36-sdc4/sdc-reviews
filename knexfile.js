module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: '',
      port: 3306,
      database: 'honeyjar',
    },
    migrations: {
      directory: __dirname + '/database/mysql/migrations'
    },
    seeds: {
      directory: __dirname + '/database/mysql/seeds'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT,
      database: process.env.RDS_DB_NAME,
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT,
      database: process.env.RDS_DB_NAME,
    },
    pool: {
      min: 0,
      max: 10
    },
    migrations: {
      directory: __dirname + '/database/mysql/seeds',
    }
  }
};
