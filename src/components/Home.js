import React from 'react';
import Relay from 'react-relay';

import UserList from './user/UserList';
import DivisionList from './division/DivisionList';
import TeamList from './team/TeamList';

class Home extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        <h1>Home</h1>

        <UserList viewer={viewer} />
        <DivisionList viewer={viewer} />
        <TeamList viewer={viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${UserList.getFragment('viewer')}
        ${DivisionList.getFragment('viewer')}
        ${TeamList.getFragment('viewer')}
      }
    `,
  },
});
