import axios from 'axios';
import { GET_ALL_MOVIES, GET_SINGLE_MOVIE } from './actionTypes';

export function createNewMovie(movieInfo) {
  return function action(dispatch) {
    axios.post('/v1/movie/create', movieInfo)
      .catch((error) => {
        console.error(error.response);
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
        console.error(error.response);
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
        console.error(error.response);
      });
  };
}

export function updateMovieInfo(id, movieInfo, callback) {
  return function action(dispatch) {
    axios.patch(`/v1/movie/${id}`, movieInfo)
      .then(() => callback())
      .catch((error) => {
        console.error(error.response);
      });
  };
}

export function deleteMovie(id, callback) {
  return function action(dispatch) {
    axios.delete(`/v1/movie/${id}`)
      .then(() => callback())
      .catch((error) => {
        console.error(error.response);
      });
  };
}
