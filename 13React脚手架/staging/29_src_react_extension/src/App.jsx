import React, { Component, Fragment } from 'react'
// import Demo from './components/1_setState'
// import Demo from './components/2._lazyLoad'
// import Demo from './components/3_useState_hooks'
// const Demo=lazy(()=>require('./components/3_hooks'))
// import Demo from './components/4_effect_hook'
// import Demo from './components/5_ref_hook'
// import Demo from './components/6_Fragment'
// import Demo from './components/7_context'
// import Parent from './components/8.optimize'
// import Parent from './components/9_renderProps'
import Parent from './components/10_ErrorBinary/Parent'
export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Parent />
      </Fragment>
    )
  }
}
