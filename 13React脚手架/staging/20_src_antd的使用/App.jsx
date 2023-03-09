import React, { Component } from 'react'
import { Button } from 'antd'
import {WechatOutlined} from '@ant-design/icons';
import 'antd/dist/antd'
export default class App extends Component {
  render() {
    return (
      <div>
      <button>点我</button>
      <Button type="primary">Primary Button</Button>
      <WechatOutlined />
      </div>

    )
  }
}
