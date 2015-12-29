import React from 'react';
import Relay from 'react-relay';

import List from '../base/List';
import Team from './Team';
import TeamForm from './TeamForm';

class TeamList extends List {
  static Row = Team;

  makeTeam = (edge) => {
    const team = edge.node;
    const {viewer, edit} = this.props;

    return <Team
      key={team.id}
      team={team}
      viewer={viewer}
      edit={edit}
    />;
  }

  render() {
    const {viewer, edit} = this.props;
    const {teams: {count, edges}} = viewer;
    const teamList = edges.map(this.makeTeam);

    return (
      <div>
        <h2>{count} Teams</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {teamList}
          </tbody>
        </table>
        {edit &&
          <TeamForm viewer={viewer} />
        }
      </div>
    );
  }
}

export default Relay.createContainer(TeamList, {
  prepareVariables() {
    return {
      limit: Number.MAX_SAFE_INTEGER,
    };
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        teams(first: $limit) {
          count,
          edges {
            node {
              id
              ${Team.getFragment('team')}
            }
          }
        }
        ${Team.getFragment('viewer')}
        ${TeamForm.getFragment('viewer')}
      }
    `,
  },
});
