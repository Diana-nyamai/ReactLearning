import React, { Component } from 'react'
import ConditionalRendering from './ConditionalRendering'

function LogoutButton(props){
    return <div>
    <button onClick={props.onClick}>Log Out</button>
    </div>
}

function LogInButton(props){
    return<div>
    <button onClick={props.onClick}>Log In</button>
    </div>
}
export class LoginUser extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isloggedIn: false
        }
        this.handleLogInClick = this.handleLogInClick.bind(this)
        this.handleLogOutClick = this.handleLogOutClick.bind(this)
    }
    handleLogInClick(){
        this.setState({
            isloggedIn:true
        })
    }
    handleLogOutClick(){
        this.setState({
            isloggedIn:false
        })
    }
    render() {
        const isLoggedIn = this.state.isloggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton onClick={this.handleLogOutClick}/>
        }
        else{
            button = <LogInButton onClick={this.handleLogInClick}/>
        }
        return (
            <div>
                <ConditionalRendering isloggedIn={isLoggedIn}/>
                 {button}
            </div>
        )
    }
}

export default LoginUser
