const express = require('express');

const movieRouter = express.Router();
const movieController = require('./movie.controller');
const { validateBody, createMovie } = require('./../services/bodyValidation');
const { requireAuthToken } = require('./../services/passport');

movieRouter.post('/create', requireAuthToken, validateBody(createMovie), movieController.createMovieItem);
movieRouter.get('/all', movieController.getAllMovies);
movieRouter.get('/:id', movieController.getSingleMovie);
movieRouter.patch('/update/:id', requireAuthToken, movieController.updateMovieInfo);
movieRouter.delete('/delete/:id', requireAuthToken, movieController.deleteMovie);

module.exports = movieRouter;
