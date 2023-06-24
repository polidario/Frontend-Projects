const config = require('../config/db.config.js');
const Pool = require('pg').Pool;

console.log(config);

const pool = new Pool({
    user: config.USER,
    host: config.HOST,
    database: config.DB,
    port: config.PORT,
    password: config.PASSWORD
});
/**
 * Uncomment the following lines to test the connection to the database
 */

// pool.on('connect', () => {
//     console.log('connected to the db');
// });

// pool.on('error', (err) => {
//     console.log(err);
// });

module.exports = pool