import React from 'react';
import Relay from 'react-relay';

import TeamList from './team/TeamList';

class Teams extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        <h1>Teams</h1>

        <TeamList viewer={viewer} edit={true} />
      </div>
    );
  }
}

export default Relay.createContainer(Teams, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${TeamList.getFragment('viewer')}
      }
    `,
  },
});
