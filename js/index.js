import React from 'react';
import ReactDOM from 'react-dom';
import {RelayRouter} from 'react-router-relay';
import createHashHistory from 'history/lib/createHashHistory';
// TODO: import createBrowserHistory from 'history/lib/createBrowserHistory'

import routes from './routes';


ReactDOM.render((
  <RelayRouter
    history={createHashHistory()}
    routes={routes}
    />
), document.getElementById('root'));
