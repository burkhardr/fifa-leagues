import React from 'react';
import Relay from 'react-relay';

import Form from '../base/Form';
import AddDivisionMutation from '../../mutations/division/AddDivisionMutation';

class DivisionForm extends Form {
  static AddMutation = AddDivisionMutation;

  constructor(...args) {
    super(...args);

    this.state = {
      name: '',
      rank: 1,
    };
  }

  render() {
    const {name, rank} = this.state;

    return (
      <form onSubmit={() => this.handleSubmit()}>
        <input type="number" min="1" value={rank} onChange={(event) => this.handleChange('rank', event)} />
        <input type="text" value={name} onChange={(event) => this.handleChange('name', event)} />
        <button type="button" onClick={() => this.handleSubmit()}>Submit</button>
      </form>
    );
  }
}

export default Relay.createContainer(DivisionForm, {
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        ${AddDivisionMutation.getFragment('viewer')}
      }
    `,
  },
});
