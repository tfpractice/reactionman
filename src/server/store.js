import createLogger from 'redux-logger';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, } from 'redux';
import { MOVIE_ACTIONS, } from './modules/movies/constants';

//
const predicate = (getState, { type, }) =>
  MOVIE_ACTIONS.has(type);
const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, });

export default state => applyMiddleware(thunk)(createStore)(reducer, state);
