import { REMAINING_ACTIONS, } from '../constants';

export default (state = 10, { type, curry, }) =>
  REMAINING_ACTIONS.has(type) ? curry(state) : state;
