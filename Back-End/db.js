const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "Maisghaith21@@",
  host: "localhost",
  port: 5432,
  database: "GOAT-Payment",

});


module.exports = pool;


