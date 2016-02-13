import Relay from 'react-relay';

export default class DeleteUserMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        users {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        deleteUser
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
      fragment on deleteUserPayload {
        id,
        viewer {
          id,
          users {
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
      connectionName: 'users',
      deletedIDFieldName: 'id',
    }];
  }

  getOptimisticResponse() {
    return {
      id: this.props.id,
      viewer: {
        id: this.props.viewer.id,
        todos: {
          count: this.props.viewer.users.count - 1,
        },
      },
    };
  }
}
