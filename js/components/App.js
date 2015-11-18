import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  prepareVariables() {
    return {
      limit: Number.MAX_SAFE_INTEGER,
    };
  },

  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        __typename
      }
    `,
  },
});
