import React, { Component } from 'react'

export class OnClickButton extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message:'welcome Visitor'
        }
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button>click me</button>
            </div>
        )
    }
}

export default OnClickButton
