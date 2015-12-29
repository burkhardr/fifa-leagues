import React from 'react';
import Relay from 'react-relay';
import invariant from 'invariant';

class List extends React.Component {
  static propTypes = {
    edit: React.PropTypes.bool,
  }

  constructor(...args) {
    super(...args);

    invariant(this.constructor.Row, 'Please define a Row component');
  }

  handleDelete() {
    const {viewer, [this.constructor.modelName]: {id}} = this.props;

    Relay.Store.update(
      new this.constructor.DeleteMutation({viewer, id})
    );
  }
}

export default List;
