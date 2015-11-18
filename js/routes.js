import {Route, IndexRoute} from 'react-router';
import React from 'react';

import ViewerQueries from './queries/ViewerQueries';
import App from './components/App';
import Home from './components/Home';

export default (
  <Route component={App} queries={ViewerQueries}>
    <Route path="/" component={Home} queries={ViewerQueries} />
  </Route>
);
