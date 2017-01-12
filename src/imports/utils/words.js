export const WORDS_API_URL = 'https://wordsapiv1.p.mashape.com/words';
export const RANDOM_WORD_URL = `${WORDS_API_URL}/?random=true`;
export const MASHAPE_KEY = process.env.REACT_APP_MASHAPE_ENV_KEY;
export const WORD_SEARCH_URL = `${WORDS_API_URL}/?`;
export const HEADERS = {
   'X-Mashape-Key': MASHAPE_KEY,
   'X-Mashape-Authorization': MASHAPE_KEY,
};
