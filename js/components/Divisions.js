import React from 'react';
import Relay from 'react-relay';

import DivisionList from './division/DivisionList';

class Divisions extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        <h1>Divisions</h1>

        <DivisionList viewer={viewer} edit={true} />
      </div>
    );
  }
}

export default Relay.createContainer(Divisions, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DivisionList.getFragment('viewer')}
      }
    `,
  },
});
