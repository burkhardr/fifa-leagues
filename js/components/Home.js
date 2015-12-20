import React from 'react';
import Relay from 'react-relay';

import DivisionList from './division/DivisionList';

class Home extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        <h1>Home</h1>

        <DivisionList viewer={viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DivisionList.getFragment('viewer')}
      }
    `,
  },
});
