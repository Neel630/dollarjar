import React, { Component } from 'react';
import './App.css';
import Person from './Components/Person'

class App extends React.Component {
 
  render() {

    console.log(this.props);
  return (
    <div className="container">
    <p>Hey {this.props.location.username}</p>
    <Person />
    </div>

  );
  }
}

export default App;

