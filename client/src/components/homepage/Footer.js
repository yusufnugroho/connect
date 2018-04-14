import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button } from 'antd';


@inject('mainStore')
@observer
export default class FooterHomePage extends Component {
  render () {
    return (
      <div>
            <h1>Footer</h1>
            <Button>Contact</Button>
            <Button>Social</Button>
            <Button>Help</Button>
      </div>
    )
  }
}
