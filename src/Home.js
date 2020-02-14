import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Home extends Component {
    
  state=({
    username:""
  })

  setUsername=(event)=>{
    let temp = event.target.value;
    this.setState({
      username:temp
    })
   
  }

  render() {

  return (
      <div>
          <input onChange={(event)=>this.setUsername(event)}></input>
          <Link to={{
            pathname:"/person",
            username:this.state.username}}><button>Submit</button></Link>
          
      </div>

  );
  }
}

export default Home;
