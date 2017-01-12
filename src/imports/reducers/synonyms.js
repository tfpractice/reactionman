import { SYNONYMS_ACTIONS, } from '../constants';

export default (state = [], { type, curry, }) =>
  SYNONYMS_ACTIONS.has(type) ? curry(state) : state;
