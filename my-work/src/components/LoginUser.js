import React, { Component } from 'react'
import ConditionalRendering from './ConditionalRendering'
import LoginButtons from './LoginButtons'

function LoginButton(props){
    return <div>
    <button onClick={props.onClick}>Log IN </button>
    </div>
}

function LogoutButton(props){
    return <div>
    <button onClick={props.onClick}>Log Out</button>
    </div>
}

export class LoginUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
        this.handleLogIn = this.handleLogIn.bind(this)
        this.handleLogOut = this.handleLogOut.bind(this)
    }

    handleLogIn(){
        this.setState({
            isLoggedIn: true
        })
    }
    
    handleLogOut(){
        this.setState({
            isLoggedIn: false
        })
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn
        let Button;
        if(isLoggedIn){
            Button = <LogoutButton onClick={this.handleLogOut}/>
        }
         else{
             Button = <LoginButton onClick={this.handleLogIn} />
         }
        return (
            <div>
                <ConditionalRendering isLoggedIn = {isLoggedIn}/>
                {Button}
            </div>
        )
    }
}

export default LoginUser
