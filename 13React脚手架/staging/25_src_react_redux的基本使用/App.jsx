import React, { Component } from 'react'
import Containers from './containers'
//引入store
import store from './redux/store'
export default class App extends Component {
  render() {
    return (
      <div>
        <Containers store={store} />
      </div>
    )
  }
}
