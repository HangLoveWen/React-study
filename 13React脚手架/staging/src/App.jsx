import React, { Component } from 'react'
import Containers from './components/containers'
import Person from './components/Person'
//引入store
export default class App extends Component {
  render() {
    return (
      <div>
        <Containers />
        <hr />
        <Person />
      </div>
    )
  }
}
