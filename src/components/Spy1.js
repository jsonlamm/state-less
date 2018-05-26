import React, { Component } from react;

class Spy1 extends Component {
  render() {
    return (
      <div color="red">
        <p>The assasin's name is {this.props.secret}</p>
      </div>
    )
  }
} 

export default Spy1;
