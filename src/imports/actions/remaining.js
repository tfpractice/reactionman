import { DECREMENT_REMAINING, INCREMENT_REMAINING, RESET_REMAINING, SET_STATUS, }
from '../constants';
import { setStatus, } from './status';

const dec = () => rem => rem - 1;
const inc = () => rem => rem + 1;
const reset = num => rem => num;

export const incrementRem = () =>
  ({ type: INCREMENT_REMAINING, curry: inc(), });

export const decrementRem = () => (dispatch, getState) =>
  Promise.resolve(dispatch({ type: DECREMENT_REMAINING, curry: dec(), }))
    .then(x => dispatch(setStatus(getState().remaining < 1)));

export const resetRem = num =>
  ({ type: RESET_REMAINING, curry: reset(num), });
