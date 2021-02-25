import React, { Component } from 'react'

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
        return (
            <div>
                
            </div>
        )
    }
}

export default LoginUser
