import React, { Component } from 'react';

import Spy1 from './Spy1';
import Spy2 from './Spy2';

class Organization extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Anip Atalooc',
      age: 931,
      origin: '3rd moon'
    }

  }
  render() {
    return (
      <div color="rainbow">
        <Spy1 secret={this.state.name} >
          <Spy2 secret={this.props.secret} />
        </Spy1 >
      </div>
    )
  }
}

export default Organization;
