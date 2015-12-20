import {Route} from 'react-router';
import React from 'react';

import ViewerQueries from './queries/ViewerQueries';
import App from './components/App';
import Home from './components/Home';
import Divisions from './components/Divisions';

export default (
  <Route component={App} queries={ViewerQueries}>
    <Route path="/" component={Home} queries={ViewerQueries} />
    <Route path="/divisions" component={Divisions} queries={ViewerQueries} />
  </Route>
);
