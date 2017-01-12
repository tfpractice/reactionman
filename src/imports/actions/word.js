import axios from 'axios';
import { MASHAPE_KEY, RANDOM_WORD_URL, WORD_SEARCH_URL, WORDS_API_URL, }
 from '../utils';
import { HEADERS as headers, } from '../utils';
import { GUESS_WORD, RESET_WORD, WORD_ACTIONS, } from '../constants';
import { updateSynonyms, } from './synonyms';
const reset = word => prev => word.toUpperCase();

export const resetWord = wrd =>
 ({ type: RESET_WORD, curry: reset(wrd), });

export const getRandomWord = reaction => (dispatch) => {
  console.log('reaction', reaction);
  return axios.get(`${WORDS_API_URL}/${reaction}`, {
 headers,
  // params: {
  //   random: true,
  //   lettersMax: 8,
  //   partOfSpeech: 'verb',
  //   letterpattern: '[a-zA-Z]+',
  //   frequencyMin: 4,
  //   frequencyMax: 6,
  //   hasDetails: 'typeOf,hasCategories',
  // },
  }).then(({ data: { word, results, }, }) => {
    console.log('random results', word);

    // dispatch(updateSynonyms(data.results[0].synonyms));

    return word;
  }).then(resetWord).then(dispatch)
    .catch(console.error);
};

export const getSynonyms = word => dispatch =>
  axios.get(`${WORDS_API_URL}/${word}`, { headers, }).then(({ data, }) => { console.log(data); return [ 'love', ]; })
    .then(updateSynonyms).then(dispatch).catch(console.error);
