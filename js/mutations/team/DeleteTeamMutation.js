import Relay from 'react-relay';

export default class DeleteTeamMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        teams {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        deleteTeam
      }
    `;
  }

  getVariables() {
    return {
      id: this.props.id,
    };
  }

  getFatQuery() {
    return Relay.QL`
      fragment on deleteTeamPayload {
        id,
        viewer {
          id,
          teams {
            count
          }
        }
      }
    `;
  }

  // TODO: clientMutationId always 0 :(
  getConfigs() {
    return [{
      type: 'NODE_DELETE',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'teams',
      deletedIDFieldName: 'id',
    }];
  }

  getOptimisticResponse() {
    return {
      id: this.props.id,
      viewer: {
        id: this.props.viewer.id,
        todos: {
          count: this.props.viewer.teams.count - 1,
        },
      },
    };
  }
}
