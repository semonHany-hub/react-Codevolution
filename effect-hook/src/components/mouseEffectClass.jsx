import React, { Component } from 'react'

class MouseEffectClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x:0,
         y:0
      }
    }
    
    updateMouseCoordinates= (e)=>{
        console.log("mousemove event...");
        this.setState({
            x:e.clientX,
            y:e.clientY
        });
    }
    
    componentDidMount(){
        console.log("set mousemove eventListener...");
        window.addEventListener("mousemove", this.updateMouseCoordinates);
    }

    componentWillUnmount(){
        console.log("mouse class component will unmount...");
        window.removeEventListener("mousemove", this.updateMouseCoordinates);
    }

  render() {
    return (
      <div>
        X- {this.state.x}  ,  Y- {this.state.y}
      </div>
    )
  }
}

export default MouseEffectClass
