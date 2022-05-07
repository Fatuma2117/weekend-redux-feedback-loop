const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//router.get goes here
router.get('/', (req, res) => {
    console.log('GET /FEEDBACK!');
    pool.query('SELECT * from "feedback";')
    .then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /api/pizza', error)
        res.sendStatus(500);
    });
})


router.post('/', (req, res) => {
    const feedback = req.body;
    console.log(feedback)
    const sqlText = `
      INSERT INTO "feedback"
        ("feeling", "understanding", "support", "comments")
          VALUES
          ($1, $2,$3,$4)
      `;
    const sqlValues = [
      feedback.feeling,
      feedback.understanding,
      feedback.support,
      feedback.comment
      
    ]
    pool.query(sqlText, sqlValues)
      .then((dbResult) => {
        console.log('Added feedback to the database', feedback);
        res.sendStatus(201);
      })
      .catch((error) => {
        console.log('Error making database query', error);
        res.sendStatus(500); // Good server always responds
      })
  })






module.exports = router;