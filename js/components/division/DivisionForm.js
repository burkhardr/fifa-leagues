import React from 'react';
import Relay from 'react-relay';

import AddDivisionMutation from '../../mutations/division/AddDivisionMutation';

class DivisionForm extends React.Component {
  constructor(...props) {
    super(...props);

    this.state = {
      name: '',
      rank: 1,
    };
  }

  handleChange = (field, event) => {
    const nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  }

  handleSubmit = () => {
    Relay.Store.update(
      new AddDivisionMutation({...this.state, viewer: this.props.viewer})
    );
  }

  render() {
    const {name, rank} = this.state;

    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="number" min="1" value={rank} onChange={this.handleChange.bind(this, 'rank')} />
        <input type="text" value={name} onChange={this.handleChange.bind(this, 'name')} />
        <button type="button" onClick={this.handleSubmit.bind(this)}>Submit</button>
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
