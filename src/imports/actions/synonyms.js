import { SYNONYMS_ACTIONS, UPDATE_SYNONYMS, } from '../constants';

const update = syns => prev => syns || [];

export const updateSynonyms = syns =>
({ type: UPDATE_SYNONYMS, curry: update(syns), });
