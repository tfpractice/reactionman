import { GUESS_ACTIONS, } from '../constants';

export default (state = new Set([]), { type, curry, }) =>
  GUESS_ACTIONS.has(type) ? curry(state) : state;
