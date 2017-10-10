const express = require('express');

const movieRouter = express.Router();
const movieController = require('./movie.controller');
const { validateBody, createMovie } = require('./../services/bodyValidation');
const { requireAuthToken } = require('./../services/passport');

movieRouter.post('/create', validateBody(createMovie), movieController.createMovieItem);
movieRouter.get('/all', requireAuthToken, movieController.getAllMovies);
movieRouter.get('/:id', movieController.getSingleMovie);
movieRouter.patch('/update/:id', movieController.updateMovieInfo);
movieRouter.delete('/delete/:id', movieController.deleteMovie);

module.exports = movieRouter;
