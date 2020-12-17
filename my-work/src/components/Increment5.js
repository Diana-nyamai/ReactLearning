import React, { Component } from 'react'

 class Increment5 extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              count:0
         }
     }

    increment(){
        this.setState((prevState) => ({
           count: prevState.count + 1
        }))
    }

     incrementFive(){
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()
         this.increment()

     }
     
    render() {
        return (
            <div>
                <h1>count is:{this.state.count}</h1>
                <button onClick={()=> this.incrementFive()}>increment</button>
            </div>
        )
    }
}

export default Increment5
