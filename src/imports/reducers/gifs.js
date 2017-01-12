import { GIF_ACTIONS, } from '../constants';

export default (state = [], { type, curry, }) =>
  GIF_ACTIONS.has(type) ? curry(state) : state;
