import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'

class Home extends Component {
 
  render() {

  return (
      <div>
          <input></input>
          <Link to="/person"><button>jash</button></Link>
          
      </div>

  );
  }
}

export default Home;