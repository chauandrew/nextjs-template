const db = require('../../db')
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default async function handler(req, res) {
  const dbResponse = await db.query('SELECT NOW()', [])
  if (dbResponse.rows) {
    res.status(200).json({ status: "ok" });
  } else {
    console.error("Could not connect to database")
    res.status(500)
  }

}
