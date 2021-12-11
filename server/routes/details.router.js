const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// setup GET route to get movies details by id
router.get('/:id', (req, res) => {
    // console.log('in details.route GET route, req.params.id:', req.params.id);
    // create variable to store id of movie that was clicked
    const movieIdDetailsToDisplay = req.params.id;
    // create join Query to get all movies details (including genre)
    const sqlText = `
    SELECT * FROM "movies"
        JOIN "movies_genres"
            ON "movies"."id"="movies_genres"."movie_id"
        JOIN "genres"
            ON "movies_genres"."genre_id"="genres"."id"
                WHERE "movie_id"=$1;`;
    const sqlValues = [movieIdDetailsToDisplay]
    pool.query(sqlText, sqlValues)
        .then(result => {
            console.log ('in GET /api/details route, result:', result.rows);
            res.send(result.rows);
        })
        .catch(err => {
            console.log('ERROR: Get movie details', err);
            res.sendStatus(500)
        })

});

module.exports = router;