
import React, { Component } from 'react'


const HigherOrderComponets = (STUDENT ) => {

       class Subject extends Component {
        render() {
            return (
                    <STUDENT subName="java" />
               
            )
          }
    }
    
    return Subject
    

}




export default  HigherOrderComponets
