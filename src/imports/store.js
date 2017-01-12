import createLogger from 'redux-logger';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore, } from 'redux';

const collapsed = (getState, action) => action.type;
const log = createLogger({ collapsed, });

export default state => applyMiddleware(thunk, log)(createStore)(reducer, state);
