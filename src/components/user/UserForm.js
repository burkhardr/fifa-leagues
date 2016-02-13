import React from 'react';
import Relay from 'react-relay';

import Form from '../base/Form';
import AddUserMutation from '../../mutations/user/AddUserMutation';

class UserForm extends Form {
  static AddMutation = AddUserMutation;

  constructor(...props) {
    super(...props);

    this.state = {
      name: '',
      team_name: '',
      is_active: true,
    };
  }

  render() {
    const {name, team_name, is_active} = this.state;

    return (
      <form onSubmit={() => this.handleSubmit()}>
        <input type="text" value={name} onChange={(event) => this.handleChange('name', event)} />
        <input type="text" value={team_name} onChange={(event) => this.handleChange('team_name', event)} />
        <input type="text" value={is_active} onChange={(event) => this.handleChange('is_active', event)} />
        <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}

export default Relay.createContainer(UserForm, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${AddUserMutation.getFragment('viewer')}
      }
    `,
  },
});
