import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'


class Home extends Component {
    
  state=({
    username:""
  })

  setUsername=(event)=>{
    event.preventDefault();
    let temp = event.target.value;
    this.setState({
      username:temp
    })
   
  }

  render() {

  return (
      <div className="container">
      <form>
          <input onChange={this.setUsername.bind(this)} value={this.state.username} placeholder="Enter Username"></input>
          <Link to={{
            pathname:"/person",
            username:this.state.username}}><button className="btn btn-primary">Submit</button></Link>
      </form>
      </div>

  );
  }
}

export default Home;
