import React from 'react';
import Relay from 'react-relay';

import DivisionList from './DivisionList';

class Home extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        home

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
