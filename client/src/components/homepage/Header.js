import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'
import { Button } from 'antd';


@inject('mainStore')
@observer
export default class HeaderHomePage extends Component {
  render () {
    return (
      <div>
            <h1>Header</h1>
            <Link to='/'><Button>Home</Button></Link>
            <Button>About</Button>
            <Link to='/login'><Button>Login</Button></Link>
      </div>
    )
  }
}
