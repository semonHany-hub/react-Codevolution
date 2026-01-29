import React, { Component } from 'react'

export class CounterEffectClass extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0,
         name:"semon"
      }
    }
    
    componentDidMount(){
        document.title=`clicked ${this.state.count} times`;
        this.interval=setInterval(()=>{
          this.setState(prevState=>({count:prevState.count+1}));
        },1000);
    }

    componentDidUpdate(prevProps, prevState){
      if(prevState.count !== this.state.count){
        console.log("updating counter");
        document.title=`clicked ${this.state.count} times`;
      }
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

  render() {
    return (
      <>
        <input name="name" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}/>
        <button onClick={()=> this.setState(prevState=>({count:prevState.count+1}))}>clicked {this.state.count} times</button>
      </>
    )
  }
}

export default CounterEffectClass
