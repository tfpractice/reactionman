import { WORD_ACTIONS, } from '../constants';

export default (state = 'apple', { type, curry, }) =>
  WORD_ACTIONS.has(type) ? curry(state) : state;
