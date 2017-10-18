import axios from 'axios';
import { GET_ALL_MOVIES, GET_SINGLE_MOVIE } from './actionTypes';

export function createNewMovie(movieInfo) {
  return function action(dispatch) {
    axios.post('/v1/movie/create', movieInfo)
      .catch((error) => {
        console.error(error);
      });
  }
}

export function getAllMovies() {
  return function action(dispatch) {
    axios.get('/v1/movie/all')
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

export function getSingleMovie(id) {
  return function action(dispatch) {
    axios.get(`/v1/movie/${id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
}

// TODO
export function updateMovieInfo(movieInfo) {
  //
}

// TODO
export function deleteMovie(id) {
  //
}
