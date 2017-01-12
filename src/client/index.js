import React from 'react';
import { render, } from 'react-dom';
import { Provider, } from 'react-redux';
import { AppContainer as HotContainer, } from 'react-hot-loader';
import { browserHistory, Router, } from 'react-router';
import { AppContainer as AppComponent, getRoutes, getStore, } from 'imports';

const store = getStore(window.__PRELOADED_STATE__);

const applyToDOM = (rStore, history) =>
  render(
    <HotContainer>
      <AppComponent store={rStore} history={history} />
    </HotContainer>, document.getElementById('root'));

applyToDOM(store, browserHistory);

if (module.hot) {
  module.hot.accept('imports', () => {
    const NextApp = require('imports').AppContainer;

    render(
      <HotContainer>
        <NextApp store={store} history={browserHistory} />
      </HotContainer>, document.getElementById('root'));
  });
}
