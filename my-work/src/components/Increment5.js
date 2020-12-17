import React, { Component } from 'react'

 class Increment5 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }
     
    render() {
        return (
            <div>
                <h1>count is:{this.state.count}</h1>
                <button onClick={()=> this.increment()}>increment</button>
            </div>
        )
    }
}

export default Increment5
