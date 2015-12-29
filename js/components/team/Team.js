import React from 'react';
import Relay from 'react-relay';

import Row from '../base/Row';
import DeleteTeamMutation from '../../mutations/team/DeleteTeamMutation';

class Team extends Row {
  static modelName = 'team';
  static DeleteMutation = DeleteTeamMutation;

  render() {
    const {team, edit} = this.props;

    return (
      <tr>
        <td>{team.name}</td>
        {edit &&
          <td><button onClick={() => this.handleDelete()}>x</button></td>
        }
      </tr>
    );
  }
}

export default Relay.createContainer(Team, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DeleteTeamMutation.getFragment('viewer')}
      }
    `,
    team: () => Relay.QL`
      fragment on Team {
        id,
        name
      }
    `,
  },
});
