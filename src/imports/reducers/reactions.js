import { REACTION_ACTIONS, } from '../constants';
const init = [ 'eye roll', 'facepalm', 'happy', 'high five', 'no', 'sad', 'kiss', 'lol', 'shrug', 'thumbs up', 'wink', ];

export default (state = init, { type, curry, }) =>
  REACTION_ACTIONS.has(type) ? curry(state) : state;
