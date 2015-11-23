import React from 'react';
import Relay from 'react-relay';

import DeleteDivisionMutation from '../../mutations/division/DeleteDivisionMutation';

class Division extends React.Component {
  handleDelete() {
    const {viewer, division: {id}} = this.props;

    Relay.Store.update(
      new DeleteDivisionMutation({viewer, id: id})
    );
  }

  render() {
    const {division} = this.props;

    return (
      <tr>
        <td>{division.rank}</td>
        <td>{division.name}</td>
        <td><button onClick={this.handleDelete.bind(this)}>x</button></td>
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
