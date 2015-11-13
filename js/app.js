import ReactDOM from 'react-dom';
import {RelayRouter} from 'react-router-relay';
// TODO: import createBrowserHistory from 'history/lib/createBrowserHistory'

import ViewerQueries from './queries/ViewerQueries';
import App from './App';

ReactDOM.render((
  <RelayRouter>
    <Route
      path="/"
      component={App}
      queries={ViewerQueries}
      />
  </RelayRouter>
), document.getElementById('root'));
