import React from 'react';
import Relay from 'react-relay';

import Row from '../base/Row';
import DeleteUserMutation from '../../mutations/user/DeleteUserMutation';

class User extends Row {
  static modelName = 'user';
  static DeleteMutation = DeleteUserMutation;

  render() {
    const {user, edit} = this.props;

    return (
      <tr>
        <td>{user.name}</td>
        <td>{user.team_name}</td>
        <td>{user.is_active}</td>
        {edit &&
          <td><button onClick={() => this.handleDelete()}>x</button></td>
        }
      </tr>
    );
  }
}

export default Relay.createContainer(User, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DeleteUserMutation.getFragment('viewer')}
      }
    `,
    user: () => Relay.QL`
      fragment on User {
        id,
        name,
        team_name,
        is_active
      }
    `,
  },
});
