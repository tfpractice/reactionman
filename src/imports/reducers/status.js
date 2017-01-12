import { STATUS_ACTIONS, } from '../constants';

export default (state = { over: true, }, { type, curry, }) =>
STATUS_ACTIONS.has(type) ? curry(state) : state;
