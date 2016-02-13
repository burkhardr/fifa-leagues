import React from 'react';
import Relay from 'react-relay';

import List from '../base/List';
import User from './User';
import UserForm from './UserForm';

class UserList extends List {
  static Row = User;

  makeUser = (edge) => {
    const user = edge.node;
    const {viewer, edit} = this.props;

    return <User
      key={user.id}
      user={user}
      viewer={viewer}
      edit={edit}
    />;
  }

  render() {
    const {viewer, edit} = this.props;
    const {users: {count, edges}} = viewer;
    const userList = edges.map(this.makeUser);

    return (
      <div>
        <h2>{count} Users</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team Name</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {userList}
          </tbody>
        </table>
        {edit &&
          <UserForm viewer={viewer} />
        }
      </div>
    );
  }
}

export default Relay.createContainer(UserList, {
  prepareVariables() {
    return {
      limit: Number.MAX_SAFE_INTEGER,
    };
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: $limit) {
          count,
          edges {
            node {
              id
              ${User.getFragment('user')}
            }
          }
        }
        ${User.getFragment('viewer')}
        ${UserForm.getFragment('viewer')}
      }
    `,
  },
});
