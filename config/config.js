module.exports = {
    "development": {
      "username": process.env.USER_NAME,
      "password": process.env.SECRET_KEY,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOST_NAME,
      "dialect": "mysql",
      "port": 3306
    },
    "test": {
      "username": "root",
      "password": "root",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": "JAWSDB_URL",
      "dialect": "mysql"
    }
  }
