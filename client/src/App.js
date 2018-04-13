import React, { Component } from 'react'
import './App.css'
import { inject, observer } from 'mobx-react'
import { Switch, Route, withRouter } from 'react-router-dom';

import Login from './components/homepage/Login'
import MainHomePage from './components/homepage/Main'

@inject('mainStore')
@withRouter
@observer
export default class App extends Component {
  
  componentWillMount(){
    console.log(this.props.mainStore.mainState.appName)
  }
  render () {
    return (
      <div>
        <Switch>
            <Route exact path="/" component={MainHomePage} />
            <Route path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}


