import React from 'react';
import Relay from 'react-relay';

import DivisionList from './DivisionList';
import DivisionForm from './DivisionForm';

class Home extends React.Component {
  render() {
    const {viewer} = this.props;

    return (
      <div>
        home

        <DivisionList viewer={viewer} />
        <DivisionForm viewer={viewer} />
      </div>
    );
  }
}

export default Relay.createContainer(Home, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${DivisionList.getFragment('viewer')}
        ${DivisionForm.getFragment('viewer')}
      }
    `,
  },
});
