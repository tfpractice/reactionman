import axios from 'axios';
import { GIPHY_KEY as api_key, GIPHY_SEARCH_URL, GIPHY_TRENDING_URL, GIPHY_URL, }
from '../utils';
import { UPDATE_GIFS, } from '../constants';
import { getRandomWord, } from './word';
const update = gifs => prev => gifs;

export const updateGifs = syns =>
({ type: UPDATE_GIFS, curry: update(syns), });

const getDownSizedMD = gifs =>
gifs.map(({ images: { downsized_medium, }, }) => downsized_medium);

const getData = ({ data, }) => data;

export const getTrending = q => dispatch =>
axios.get(GIPHY_TRENDING_URL, { params: { api_key, q, }, })
  .then(getData)
  .then(getData)
  .then(getDownSizedMD)
  .then(updateGifs)
  .then(dispatch)
  .then(x => getRandomWord(q))
  .then(dispatch)
  .catch(console.error);
