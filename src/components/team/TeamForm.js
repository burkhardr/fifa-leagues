import React from 'react';
import Relay from 'react-relay';

import Form from '../base/Form';
import AddTeamMutation from '../../mutations/team/AddTeamMutation';

class TeamForm extends Form {
  static AddMutation = AddTeamMutation;

  constructor(...args) {
    super(...args);

    this.state = {
      name: '',
    };
  }

  render() {
    const {name} = this.state;

    return (
      <form onSubmit={() => this.handleSubmit()}>
        <input type="text" value={name} onChange={(event) => this.handleChange('name', event)} />
        <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}

export default Relay.createContainer(TeamForm, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${AddTeamMutation.getFragment('viewer')}
      }
    `,
  },
});
