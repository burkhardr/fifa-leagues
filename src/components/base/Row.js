import React from 'react';
import Relay from 'react-relay';
import invariant from 'invariant';

class Row extends React.Component {
  static propTypes = {
    edit: React.PropTypes.bool,
  }

  constructor(...args) {
    super(...args);

    invariant(this.constructor.modelName, 'Please define a modelName');
    invariant(this.constructor.DeleteMutation, 'Please define a DeleteMutation');
  }

  handleDelete() {
    const {viewer, [this.constructor.modelName]: {id}} = this.props;

    Relay.Store.update(
      new this.constructor.DeleteMutation({viewer, id})
    );
  }
}

export default Row;
