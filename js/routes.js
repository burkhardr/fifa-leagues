import {Route} from 'react-router';
import React from 'react';

import ViewerQueries from './queries/ViewerQueries';
import App from './components/App';
import Home from './components/Home';
import Users from './components/Users';
import Divisions from './components/Divisions';
import Teams from './components/Teams';

export default (
  <Route component={App} queries={ViewerQueries}>
    <Route path="/" component={Home} queries={ViewerQueries} />
    <Route path="/users" component={Users} queries={ViewerQueries} />
    <Route path="/divisions" component={Divisions} queries={ViewerQueries} />
    <Route path="/teams" component={Teams} queries={ViewerQueries} />
  </Route>
);
