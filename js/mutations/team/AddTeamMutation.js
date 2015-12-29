import Relay from 'react-relay';

export default class AddTeamMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        teams {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        addTeam
      }
    `;
  }

  getVariables() {
    return {
      name: this.props.name,
    };
  }

  // TODO: viewer doesn't get returned from graphql => count won't update
  getFatQuery() {
    return Relay.QL`
      fragment on addTeamPayload {
        changedTeamEdge,
        viewer {
          teams {
            count
          }
        }
      }
    `;
  }

  getConfigs() {
    return [{
      type: 'RANGE_ADD',
      parentID: this.props.viewer.id,
      connectionName: 'teams',
      edgeName: 'changedTeamEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }

  getOptimisticResponse() {
    return {
      changedTeamEdge: {
        node: {
          name: this.props.name,
        },
      },
      viewer: {
        id: this.props.viewer.id,
        teams: {
          count: this.props.viewer.teams.count + 1,
        },
      },
    };
  }
}
