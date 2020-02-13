import React, { Component } from 'react';
import box from './Addperson.css'

const Addperson = (props) => {

  
    return (
        <div className="box">
            <p>{props.name}</p>

            <p>value:{props.value}</p>
            <input></input>
            <button >Add</button>
            <button>Sub</button>
        </div>
    );
    
}

export default Addperson;