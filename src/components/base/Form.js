import React from 'react';
import Relay from 'react-relay';
import invariant from 'invariant';

class Form extends React.Component {
  constructor(...args) {
    super(...args);

    invariant(this.constructor.AddMutation, 'Please define a AddMutation');
  }

  handleChange = (field, event) => {
    const nextState = {};
    nextState[field] = event.target.value;

    this.setState(nextState);
  }

  handleSubmit = () => {
    const { AddMutation } = this.constructor;
    Relay.Store.update(
      new AddMutation({...this.state, viewer: this.props.viewer})
    );
  }
}

export default Form;
