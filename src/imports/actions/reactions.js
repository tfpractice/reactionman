import axios from 'axios';
import cheerio from 'cheerio';
import scrape from 'scrape-it';
import request from 'request';

// import 'isomorphic-fetch';
import { REACTION_ACTIONS, UPDATE_REACTIONS, } from '../constants';
import { GIPHY_CATEGORIES_URL, HEADERS as headers, } from '../utils';
const update = syns => prev => syns || [ 'eye roll', 'facepalm', 'happy', 'high five', 'no', 'sad', 'kiss', 'lol', 'shrug', 'thumbs up', 'wink', ];

export const updateReactions = syns =>
({ type: UPDATE_REACTIONS, curry: update(syns), });

export const getReactions = () =>
axios.post('https://neutrinoapi-html-extract.p.mashape.com/html-extract-tags',
  {
 headers,
 data: {
 content: `${GIPHY_CATEGORIES_URL}/reactions`,
 tag: '#categories .overlay-tag-name',
 },
 params: { tag: '#categories .overlay-tag-name', },
  }).then(console.log).catch(console.error);
