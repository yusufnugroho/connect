import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
// import { Button } from 'antd'
import HeaderHomePage from './Header'
import FooterHomePage from './Footer'


@inject('mainStore')
@observer
export default class MainHomePage extends Component {
  render () {
    return (
      <div>
        <HeaderHomePage />
          <h1>Main Home Page</h1>
          <br />
            <p>Story</p>
            <p>Solution</p>
          <FooterHomePage />
      </div>
    )
  }
}
