import React, { Component } from 'react'

export class OnClickButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'welcome Visitor'
        }
    }
//method to handle the click of the button
    changeMessage(){
        this.setState({
            message:'Thank you for subscribing!'
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>click me</button>
            </div>
        )
    }
}

export default OnClickButton
