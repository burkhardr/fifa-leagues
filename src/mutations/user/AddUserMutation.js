import Relay from 'react-relay';

export default class AddUserMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        users {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        addUser
      }
    `;
  }

  getVariables() {
    return {
      name: this.props.name,
      team_name: this.props.team_name,
      is_active: this.props.is_active,
    };
  }

  // TODO: viewer doesn't get returned from graphql => count won't update
  getFatQuery() {
    return Relay.QL`
      fragment on addUserPayload {
        changedUserEdge,
        viewer {
          users {
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
      connectionName: 'users',
      edgeName: 'changedUserEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }

  getOptimisticResponse() {
    return {
      changedUserEdge: {
        node: {
          name: this.props.name,
          team_name: this.props.team_name,
          is_active: this.props.is_active,
        },
      },
      viewer: {
        id: this.props.viewer.id,
        users: {
          count: this.props.viewer.users.count + 1,
        },
      },
    };
  }
}
