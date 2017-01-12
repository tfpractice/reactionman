import { combineReducers, } from 'redux';
import { reducer as forms, } from 'redux-form';
import guesses from './guesses';
import remaining from './remaining';
import status from './status';
import word from './word';
import synonyms from './synonyms';
import gifs from './gifs';
import reactions from './reactions';

export default combineReducers({
 word, guesses, remaining, status, reactions, gifs, synonyms, forms,
});
