

import React, { Component } from 'react'
import HigherOrderComponets from './HigerOrder'

export class Abhishek extends Component {

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
                <h1 onMouseOver={this.marksIncrement.bind(this)}>  Abhishek Marks is: {this.state.marks} , {this.props.subName} </h1>
            </div>
        )
    }
}

export default HigherOrderComponets(Abhishek)
// export default Abhishek
