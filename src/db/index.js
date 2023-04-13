//Documentation for node-postgres at: https://node-postgres.com/
const { Pool } = require('pg')
 
const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT
})
 
module.exports = {
  /**
   * Perform a parametrized query against the connected database
   * 
   * @param {String} text the query string, eg 'SELECT * FROM users WHERE id = $1'
   * @param {[*]} params to substitute $1, $2, ...
   * @returns {{ rowCount, rows, fields }} where rows is an array of objects from the query
   */
  query: async (text, params) => {
    return pool.query(text, params)
  },
}
