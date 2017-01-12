import { Review, } from '../models';

/**
 * Get all reviews
 * @param req
 * @param res
 * @returns void
 */
export const getReviews = (req, res) =>
  Review.find()
    .sort({ movie_id: 1, dateAdded: -1, }).exec()
    .then(reviews => res.json({ reviews, }))
    .catch(err => res.status(500).send(err));

  /**
   * Get all reviews for one movie
   * @param req
   * @param res
   * @returns void
   */
export const getMovieReviews = (req, res) =>
  Review.findByMovieID(req.movie_id)
    .sort({ dateAdded: -1, }).exec()
    .then(reviews => res.json({ reviews, }))
    .catch(err => res.status(500).send(err));

/**
 * Save a review
 * @param req
 * @param res
 * @returns void
 */
export const addReview = (req, res) =>
  Review.create({ ...req.body, movie_id: req.movie_id, })
    .then(review => res.json({ review, }))
    .catch(err => res.status(500).send(err));

export const updateReview = (req, res) =>
  Review.findByIdAndUpdate(req.params.id, req.body, { new: true, }).exec()
    .then(review => res.json({ review, }))
    .catch(err => res.status(500).send(err));

/**
 * Get a single review
 * @param req
 * @param res
 * @returns void
 */
export const getReview = (req, res) =>
 Review.findOne({ id: req.params.id, }).exec()
   .then(review => res.json({ review, }))
   .catch(err => res.status(500).send(err));

export const moviesByFreq = (req, res) =>
  Review.moviesByFreq()
    .then(arr => arr.map(({ _id: movie_id, }) => movie_id))
    .then(movies => res.json(movies))
    .catch(err => res.status(500).send(err));

/**
 * Delete a review
 * @param req
 * @param res
 * @returns void
 */
export const deleteReview = (req, res) => {
  Review.findByIdAndRemove(req.params.id, { select: 'id', }).exec()
    .then(review => res.json({ review, }))
    .catch(err => res.status(500).send(err));
};
