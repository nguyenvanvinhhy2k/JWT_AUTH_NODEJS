const { Movie } = require("../models/model");

const movieController = {
  addMovie: async (req, res) => {
    try {
      const newMovie = new Movie(req.body);
      const addMovie = await newMovie.save();
      res.status(200).json(addMovie);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllMovie: async (req, res) => {
    try {
      const movie = await Movie.find();
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  // GET A MOVIE
  getAnMovie: async (req, res) => {
    try {
      const movie = await Movie.find({ movieID: req.params.id });
      res.status(200).json(movie);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = movieController;
