import React from 'react';
import Relay from 'react-relay';

class DivisionList extends React.Component {
  makeDivision = (edge) => {
    const division = edge.node;

    return (
      <li key={division.id}>
        {division.rank} - {division.name}
      </li>
    );
  }

  render() {
    const {viewer: {divisions: {count, edges}}} = this.props;
    const divisionList = edges.map(this.makeDivision);

    return (
      <div>
        <h2>{count} Divisions</h2>
        <ul>
          {divisionList}
        </ul>
      </div>
    );
  }
}

export default Relay.createContainer(DivisionList, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        divisions(first: 10) {
          count,
          edges {
            node {
              id,
              name,
              rank
            }
          }
        }
      }
    `,
  },
});
