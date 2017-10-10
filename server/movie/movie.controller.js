/* eslint-disable no-underscore-dangle */
const Movie = require('./movie.model');

exports.createMovieItem = async (req, res) => {
  try {
    // TODO: Assign the logged in user to the movie item

    const movie = await Movie.create(req.body);
    return res.status(201).json({ success: true, movie });
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getAllMovies = async (req, res) => {
  try {
    const allMovies = await Movie.find();
    return res.status(200).json(allMovies);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.getSingleMovie = async (req, res) => {
  try {
    const singleMovie = await Movie.findById(req.params.id);
    if (!singleMovie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    return res.status(200).json(singleMovie);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.updateMovieInfo = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    // TODO: Check if the user logged in matches the user of the movie found

    await Movie.findOneAndUpdate(
      { _id: movie._id },
      req.body,
      { new: true, runValidators: true }, // return the updated info instead of the previous
    ).exec();

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ message: 'Movie not found.' });
    }

    // TODO: Check if the user logged in matches the user of the movie found

    await movie.remove();

    return res.status(200).json({ message: 'Movie successfully deleted.' });
  } catch (error) {
    return res.status(400).json(error);
  }
};
