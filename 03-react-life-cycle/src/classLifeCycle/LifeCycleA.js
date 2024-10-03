import React, { Component } from 'react'
import LifeCycleB from '../classLifeCycle/LifeCycleB';

export class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        name: "Abhishek"
        }
        console.log("lifeCycleA : Contructor");
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log("lifeCycleA : getDervieStateFromProps ");
        
        
        return null
    }

    componentDidMount() {
        console.log("lifeCycleA: ComponentDidMount");
        
    }
    
    render() {
      console.log("lifeCycleA : Render");
      
    return (
        <div>
          <LifeCycleB/>
        helllo life Cycle A
      </div>
    )
  }
}

export default LifeCycleA
