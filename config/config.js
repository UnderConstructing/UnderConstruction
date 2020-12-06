require('dotenv').config()
module.exports = {
    "development": {
        "username": process.env.USER,
        "password": process.env.SECRET,
        "database": process.env.DATABASE,
        "host": process.env.HOST,
        "dialect": "mysql"
    },
    "test": {
      "username": "root",
      "password": "root",
      "database": "database_test",
      "host": "127.0.0.1",
      "dialect": "mysql"
    },
    "production": {
      "use_env_variable": process.env.JAWSDB_URL,
      "dialect": "mysql"
    }
  }
