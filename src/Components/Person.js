import React, { Component } from 'react';
import Addperson from './Addperson'

class Person extends Component {

    state =({
        newperson:"",
        person:[
            {
                username:"Sandeep",
                value:30
            },
            {
                username:"Meet",
                value:20
            }
        ],
        
        total:0
      })

      addpersonHandler = () => {
        console.log(this.state.person);
        // For adding new Person
        let temp = {username: this.state.newperson,value:0}
        let arr = this.state.person;
        arr.push(temp);
        this.setState({person:arr});

      }

      changeHandler = (event) =>{
            this.setState({
                newperson :  event.target.value
            }
            )
        console.log(this.state);
    }

    total = () => {
        let temp = 0;
        this.state.person.forEach(element => {
            temp= temp+element.value;
        });
        console.log(temp);
        
        // this.setState({
        //     total:temp,
        // })
    }

    // add10 = (index) =>{
    //     this.state.person[index].value= this.state.person[index].value + 10; 
    // }

    // sub10 = (index) =>{
    //     this.state.person[index].value= this.state.person[index].value - 10; 
    // }

    render(){
    return (
    <div>
        <input type="text" onChange={event => this.changeHandler(event)}></input>
        <button onClick={this.addpersonHandler}>Add a Person</button>
        <p>Total : {this.total()}</p>
        {
            this.state.person.map((person) => {
                return <Addperson 
                    name={person.username}
                    value={person.value}

                />
            }
            )
        }
    </div>
    );
}
}

export default Person;
