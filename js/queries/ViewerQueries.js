import Relay from 'relay';

const ViewerQueries = {
  viewer: () => Relay.QL`query { viewer }`,
};

export default ViewerQueries;
