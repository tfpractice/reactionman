import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { App, } from 'imports/components';
import { AppContainer, } from 'imports';
import { browserHistory, Router, } from 'react-router';
import getStore from 'imports/store';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

render(
  <AppContainer store={getStore()} history={browserHistory} />
  , document.getElementById('root')
);
