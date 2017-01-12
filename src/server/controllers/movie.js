import { Review, } from '../models';

export const getMovies = (req, res) =>
  Review.moviesByFreq()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(movies => res.json(movies))
    .catch(err => res.status(500).send(err));

export const moviesByAvg = (req, res) =>
  Review.moviesByAvg()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(movies => res.json(movies))
    .catch(err => res.status(500).send(err));

export const moviesByFreq = (req, res) =>
  Review.moviesByFreq()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(movies => res.json(movies))
    .catch(err => res.status(500).send(err));
