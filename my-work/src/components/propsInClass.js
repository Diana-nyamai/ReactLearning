import React, { Component } from 'react'

export class PropsInClass extends Component {
    render() {
        return (
            <div>
                my name is {this.props.name} and skilled in {this.props.skill}
            </div>
        )
    }
}

export default PropsInClass
