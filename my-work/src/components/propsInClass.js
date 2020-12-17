import React, { Component } from 'react'

export class PropsInClass extends Component {
    render() {
        return (
            <div>
            <h1>
            my name is {this.props.name} and skilled in {this.props.skill}
            </h1>
                
            </div>
        )
    }
}

export default PropsInClass
