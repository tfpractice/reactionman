import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, } from 'react-redux';
import { App, } from './components';
import getStore from './store';
import injectTapEventPlugin from 'react-tap-event-plugin';

import './index.css';
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>, document.getElementById('root')
);
