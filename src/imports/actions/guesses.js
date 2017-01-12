import { CORRECT_GUESS, GUESS_ACTIONS, GUESS_LETTER, INCORRECT_GUESS, REPEAT_GUESS, } from '../constants';
import { decrementRem, } from './remaining';

const add = str => ltrs => ltrs.add(str.toUpperCase());
const correctGuess = guess => unk => unk.has(guess.toUpperCase());

const unknowns = getState => new Set(
  (getState().word.toUpperCase().split('')).filter(c => !getState().guesses.has(c.toUpperCase())));

export const guessLetter = str => (dispatch, getState) =>
  correctGuess(str)(unknowns(getState)) ?
   dispatch({ type: GUESS_LETTER, curry: add(str), }) : dispatch(decrementRem());

export const guessForm = ({ guess, }) => {
  console.log('guess', guess);
  guessLetter(guess);
};
