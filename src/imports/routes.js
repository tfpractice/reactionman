import React from 'react';
import { IndexRoute, Route, } from 'react-router';
import { App, } from './components';

export default store => (
  <Route name="app" path="/" component={App}>
    <IndexRoute component={App} />
  </Route>);
