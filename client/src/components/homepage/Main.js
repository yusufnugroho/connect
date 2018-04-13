import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('mainStore')
@observer
export default class MainHomePage extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>Main Home Page</h1>
          <br />
          <Link to='/login'>
            <button>Login Page</button>
          </Link>
        </div>
      </div>
    )
  }
}
