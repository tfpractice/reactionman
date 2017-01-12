import { Router, } from 'express';
import { MovieController, } from '../controllers';

const router = new Router();

router.param('movie_id', (req, res, next, id, key) => {
  req.movie_id = id;
  next();
});

// Get all Movies
router.route('/movies').get(MovieController.getMovies);
router.route('/movies/avg').get(MovieController.moviesByAvg);
router.route('/movies/freq').get(MovieController.moviesByFreq);
router.route('/movies/top').get(MovieController.moviesByAvg);

export default router;
