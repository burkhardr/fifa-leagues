import React from 'react';
import Relay from 'react-relay';

import Row from '../base/Row';
import DeleteDivisionMutation from '../../mutations/division/DeleteDivisionMutation';

class Division extends Row {
  static modelName = 'division';
  static DeleteMutation = DeleteDivisionMutation;

  render() {
    const {division, edit} = this.props;

    return (
      <tr>
        <td>{division.rank}</td>
        <td>{division.name}</td>
        {edit &&
          <td><button onClick={() => this.handleDelete()}>x</button></td>
        }
      </tr>
    );
  }
}

export default Relay.createContainer(Division, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DeleteDivisionMutation.getFragment('viewer')}
      }
    `,
    division: () => Relay.QL`
      fragment on Division {
        id,
        name,
        rank
      }
    `,
  },
});
