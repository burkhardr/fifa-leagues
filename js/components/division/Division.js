import React from 'react';
import Relay from 'react-relay';

import DeleteDivisionMutation from '../../mutations/division/DeleteDivisionMutation';

class Division extends React.Component {
  static propTypes = {
    edit: React.PropTypes.bool,
  }

  handleDelete() {
    const {viewer, division: {id}} = this.props;

    Relay.Store.update(
      new DeleteDivisionMutation({viewer, id: id})
    );
  }

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
