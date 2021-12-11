const { Popper } = require('@material-ui/core');
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  console.log('in /api/genre GET')
  // Add query to get all genres
  const sqlText = `SELECT * FROM "genres";`
  pool.query(sqlText)
    .then((dbRes) => {
      res.send(dbRes.rows);
      console.log(dbRes.rows);
    })
    .catch((dbErr) => {
      console.error(dbErr);
      res.sendStatus(500);
    })
});

module.exports = router;