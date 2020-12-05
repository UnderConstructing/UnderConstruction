
module.exports = {
    "development": {
        "username": "ow2n4bvwmkjwaavg",
        "password": "xv44prb4f3t68lr6",
        "database": "r04bzbpr9jdsc6k5",
        "host": "ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
      "use_env_variable": "mysql://ow2n4bvwmkjwaavg:xv44prb4f3t68lr6@ixnzh1cxch6rtdrx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/r04bzbpr9jdsc6k5",
      "dialect": "mysql"
    }
  }
