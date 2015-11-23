import Relay from 'react-relay';

export default class DeleteDivisionMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id
        divisions {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        deleteDivision
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
      fragment on deleteDivisionPayload {
        id,
        viewer {
          id,
          divisions {
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
      connectionName: 'divisions',
      deletedIDFieldName: 'id',
    }];
  }

  getOptimisticResponse() {
    return {
      id: this.props.id,
      viewer: {
        id: this.props.viewer.id,
        todos: {
          count: this.props.viewer.divisions.count - 1,
        },
      },
    };
  }
}
