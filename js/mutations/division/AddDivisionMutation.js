import Relay from 'react-relay';

export default class AddDivisionMutation extends Relay.Mutation {
  static fragments = {
    viewer: () => Relay.QL`
      fragment on Viewer {
        id,
        divisions {
          count
        }
      }
    `,
  };

  getMutation() {
    return Relay.QL`
      mutation {
        addDivision
      }
    `;
  }

  getVariables() {
    return {
      rank: this.props.rank,
      name: this.props.name,
    };
  }

  // TODO: viewer doesn't get returned from graphql => count won't update
  getFatQuery() {
    return Relay.QL`
      fragment on addDivisionPayload {
        changedDivisionEdge,
        viewer {
          divisions {
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
      connectionName: 'divisions',
      edgeName: 'changedDivisionEdge',
      rangeBehaviors: {
        '': 'append',
      },
    }];
  }

  getOptimisticResponse() {
    return {
      changedDivisionEdge: {
        node: {
          rank: this.props.rank,
          name: this.props.name,
        },
      },
      viewer: {
        id: this.props.viewer.id,
        divisions: {
          count: this.props.viewer.divisions.count + 1,
        },
      },
    };
  }
}
