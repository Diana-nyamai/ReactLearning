import React, { Component } from 'react'

 class propsInClass extends Component {
     
    render(props) {
        return (
            <div>
                <h1>my name is {this.props.name} and skilled in {this.props.skill}</h1>
            </div>
        )
    }
}

export default propsInClass
