import React, { Component } from 'react'

class Increment1 extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

    Increment(){
        this.setState({
            count:this.state.count + 1
        }, console.log('callback value', this.state.count))
    }
    
    render() {
        return (
            <div>
                <h1>count is: {this.state.count}</h1>
                <button onClick={() => this.Increment()}>increment</button>
            </div>
        )
    }
}

export default Increment1
