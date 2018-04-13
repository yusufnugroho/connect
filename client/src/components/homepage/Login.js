import { Link } from 'react-router-dom'
import React from 'react'
import { inject, observer } from 'mobx-react'

@inject('authStore')
@observer

export default class Login extends React.Component {
    
    handleEmailChange = e => this.props.authStore.setUsername(e.target.value)
    handlePasswordChange = e => this.props.authStore.setPassword(e.target.value)   
    render(){
        return(
            <div>
                <h1>Login Page</h1>
                <br/>
                <Link to="/"><button>Home Page</button></Link>
            </div>
        )
    }
}
