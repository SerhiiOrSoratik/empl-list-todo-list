const Pool = require('pg').Pool;
const pool = new Pool({
    user: "sorat",
    password: "Bioware3619",
    host: "localhost",
    port: 5432,
    database: "db"
});

module.exports = pool;