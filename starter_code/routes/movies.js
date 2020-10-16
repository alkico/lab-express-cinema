const express = require("express");
const router = express.Router();
const Movie = require("../models/movies");

/* Display all movies route */
router.get("/movies", (req, res, next) => {
  Movie.find().then((dataFromDB) => {
    // console.log("data from database:", dataFromDB);
    //or: res.send(dataFromDB);
    res.render("movies", { movieList: dataFromDB });
  });
});


/* Display individual movie info route */
router.get("/movies/:id", (req, res) => {
  // console.log(req.params);
  const movieID = req.params.id;
  Movie.findById(movieID).then((movie) => {
    //res.send(movie);
    console.log("movie stars:", movie.stars);
    res.render("movie-info", { movieObject: movie });
  });
});

module.exports = router;