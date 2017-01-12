import { Router, } from 'express';
import { utils, } from 'imports';

const { MovieUtils, } = utils;

export const { MOVIE_DB_SEARCH_URL: SEARCH_URL, } = MovieUtils;

const router = new Router();

router.route('/search').get((req, res) => {

  // return axios.get(SEARCH_URL, { params: { ...req.query, }, }).then(r => res.json(r.data)).catch(err => console.error(err));
});

export default router;
