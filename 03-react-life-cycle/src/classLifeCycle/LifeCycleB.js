import React, { Component } from 'react'

export class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Abhishek"
        }
        console.log("lifeCycleB : Contructor");
        
    }

    static getDerivedStateFromProps(props, state) {
        console.log("lifeCycleB : getDervieStateFromProps ");

        
        
        return null
    }

    componentDidMount() {
        console.log("lifeCycleB: ComponentDidMount");
        
    }
    
    render() {
      console.log("lifeCycleB : Render");
      
    return (
      <div>
        helllo Life Cycle B
      </div>
    )
  }
}

export default LifeCycleB
