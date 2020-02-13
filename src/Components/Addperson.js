import React, { Component } from 'react';
import box from './Addperson.css'

const Addperson = (props) => {

  
    return (
        <div className="box">
            <p>{props.name}</p>

            <p>value:{props.value}</p>
            <button onClick={props.addHandler}>Add</button>
            <button onClick={props.subHandler}>Sub</button>
        </div>
    );
    
}

export default Addperson;