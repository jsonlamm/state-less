import React, { Component } from 'react';

import Spy1 from './Spy1';

const MyContext = React.createContext();

class MyProvider extends Component {
  constructor() {
    super()
    this.state = {
      name: 'Anip Atalooc',
      age: 931,
      origin: '3rd moon'
    }
  }
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

export class Organization extends Component {
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
      <MyProvider>
        <div color="rainbow">
          <Spy1
            secretName={this.state.name}
            secretAge={this.state.age}>
          </Spy1 >
        </div>
      </MyProvider>
    )
  }
}

export { MyContext }
