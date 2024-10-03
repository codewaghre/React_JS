import React, { Component } from 'react'
import '../App.css'

export class ProductUpdate extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ProductID: '',qty:0
      }
    }
    

    addToCart = (pid) => {
        this.setState({
            ProductID:pid, qty:this.state.qty +1
        })
    }
        
    

  render() {
    return (
        <div>
        <button className='button' onClick={() => this.addToCart(1)} > Add TO Cart</button>
            <Card ProductID={ this.state.ProductID} qty={this.state.qty} />
      </div>
    )
  }
}




export class Card extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         qty: 0
      }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("lifeCycle : getDervieStateFromProps ");
        console.log(props.qty);
        console.log(state.qty);
        
        
        if (props.qty !== state.qty) {
            return { qty: props.qty }
        }
        
        return null
    }
    

    // updateQty = () => {
    //     this.setState({
    //         qty:this.state.qty + 1
    //     })
    // }

    componentDidMount() {
        console.log("Exceuted After the componet Render");
        
    }

    componentDidUpdate(prevPros, prevState) {
        console.log("Compnent Updated");
        
    }
    
  render() {
    return (
      <div>
        {/* <h1>Count Cart : {this.state.qty} </h1> */}
        
        <h1>Count Cart : {this.state.qty} </h1>
            
        <button className='button'onClick={this.updateQty} > Add Count  Cart</button>
      </div>
    )
  }
}

export default  ProductUpdate

