import React from 'react';
import Relay from 'react-relay';

import UserList from './user/UserList';

class Users extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        <h1>Users</h1>

        <UserList viewer={viewer} edit={true} />
      </div>
    );
  }
}

export default Relay.createContainer(Users, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${UserList.getFragment('viewer')}
      }
    `,
  },
});
