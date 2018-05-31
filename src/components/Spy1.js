import React, { Component } from 'react';

import Spy2 from './Spy2';

class Spy1 extends Component {
  render() {
    return (
      <div color="red">
        <p>The assasin's name is {this.props.secretName}</p>
        <Spy2 secretAge={this.props.secretAge} />
      </div>
    )
  }
}

export default Spy1;
