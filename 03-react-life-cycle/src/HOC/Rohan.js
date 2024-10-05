import React, { Component } from 'react'

export class Rohan extends Component {

    state = {
        marks: 0
    }

    marksIncrement = () => {
        this.setState({
            marks: this.state.marks + 1
        })
    }

    render() {
        return (
            <div>
                <h1 onMouseOver={this.marksIncrement.bind(this)}> Marks is: {this.state.marks} </h1>
            </div>
        )
    }
}

export default Rohan
