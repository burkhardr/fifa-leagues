import React from 'react';
import Relay from 'react-relay';

class Division extends React.Component {
  render() {
    const {division} = this.props;

    return (
      <li>
        {division.rank}: {division.name}
      </li>
    );
  }
}

export default Relay.createContainer(Division, {
  fragments: {
    division: () => Relay.QL`
      fragment on Division {
        name,
        rank
      }
    `,
  },
});
