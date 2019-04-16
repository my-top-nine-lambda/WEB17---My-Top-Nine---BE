const productionDbConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/users.db3',
    },
    migrations: {
      directory: './data/migrations',
    },
  },
  production: {
    client: 'pg',
    connection: productionDbConnection,
    migrations: {
      directory: './data/migrations',
    },
  }
 };