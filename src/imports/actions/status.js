import { SET_STATUS, STATUS_ACTIONS, } from '../constants';

const set = over => status => ({ over, });

export const endGame = () =>
({ type: SET_STATUS, curry: set(true), });

export const playGame = () =>
({ type: SET_STATUS, curry: set(false), });

export const setStatus = over =>
({ type: SET_STATUS, curry: set(over), });
