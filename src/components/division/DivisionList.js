import React from 'react';
import Relay from 'react-relay';

import List from '../base/List';
import Division from './Division';
import DivisionForm from './DivisionForm';

class DivisionList extends List {
  static Row = Division;

  makeDivision = (edge) => {
    const division = edge.node;
    const {viewer, edit} = this.props;

    return <Division
      key={division.id}
      division={division}
      viewer={viewer}
      edit={edit}
    />;
  }

  render() {
    const {viewer, edit} = this.props;
    const {divisions: {count, edges}} = viewer;
    const divisionList = edges.map(this.makeDivision);

    return (
      <div>
        <h2>{count} Divisions</h2>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {divisionList}
          </tbody>
        </table>
        {edit &&
          <DivisionForm viewer={viewer} />
        }
      </div>
    );
  }
}

export default Relay.createContainer(DivisionList, {
  prepareVariables() {
    return {
      limit: Number.MAX_SAFE_INTEGER,
    };
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        divisions(first: $limit) {
          count,
          edges {
            node {
              id
              ${Division.getFragment('division')}
            }
          }
        }
        ${Division.getFragment('viewer')}
        ${DivisionForm.getFragment('viewer')}
      }
    `,
  },
});
