import { Router, } from 'express';
import { MovieController, ReviewController, } from '../controllers';
import { isLoggedIn, } from './auth';

const router = new Router();

router.param('movie_id', (req, res, next, id, key) => {
  req.movie_id = id;
  next();
});

// Get all Reviews
router.route('/reviews/').get(ReviewController.getReviews);

router.route('/reviews/:movie_id').get(ReviewController.getMovieReviews);

// Get one review by cuid
router.route('/reviews/:movie_id/:id').get(ReviewController.getReview);

// Add a new Review
router.route('/reviews/:movie_id').post(isLoggedIn, ReviewController.addReview);

// Update one review by cuid
router.route('/reviews/:movie_id/:id').patch(isLoggedIn, ReviewController.updateReview);

// Delete a review by cuid
router.route('/reviews/:movie_id/:id').delete(isLoggedIn, ReviewController.deleteReview);

export default router;
