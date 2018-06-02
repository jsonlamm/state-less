import React, { Component } from 'react';
import {MyContext} from './Organization'

import Spy2 from './Spy2';

class Spy1 extends Component {
  render() {
    return (
      <div color="red">
        <MyContext.Consumer>
          {(context) => (
            <p>The assasin's name is {context}</p>
          )}

          <Spy2 secretAge={this.props.age} />
        </MyContext.Consumer>
      </div>
    )
  }
}

export default Spy1;
