import React from 'react';
import Relay from 'react-relay';
import {Link} from 'react-router';

const ACTIVE = { color: 'red' };

class App extends React.Component {

  render() {
    return (
      <div>
        <ul className="menu">
          <li><Link to="/" activeStyle={ACTIVE}>Home</Link></li>
          <li><Link to="/users" activeStyle={ACTIVE}>Users</Link></li>
          <li><Link to="/divisions" activeStyle={ACTIVE}>Divisions</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        __typename
      }
    `,
  },
});
