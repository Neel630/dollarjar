import React, { Component } from 'react';
import Addperson from './Addperson'

class Person extends Component {

    state =({
        newperson:"",
        count:3,
        person:[
            {
                username:"Sandeep",
                value:30,
                id:1
            },
            {
                username:"Meet",
                value:20,
                id:2
            }
        ],
        penalty:10,
        total:0
      })

      changePenaltyHandler = (event) =>{
        let temp = parseInt(event.target.value)
        this.setState({
            penalty :  temp
        }
        )

    }

      addpersonHandler = () => {
        console.log(this.state.person);
        // For adding new Person
        let idval = this.state.count;
        let temp = {username: this.state.newperson,value:0, id:idval}
        idval=idval+1;
        let arr = this.state.person;
        arr.push(temp);
        this.setState({
            person:arr,
            count:idval
        });

        console.log(this.state.count);
      }

      changeHandler = (event) =>{
            this.setState({
                newperson :  event.target.value
            }
            )

        }

    total = () => {
        let temp = 0;
        this.state.person.forEach(element => {
            temp= temp+element.value;
        });
        console.log(temp);
        
        this.setState({
            total:temp,
        })
    }

    addMoneyHandler = (event, id) =>{
        var index=0;
        for(var i=0;i<this.state.person.length;i++){
            if(this.state.person[i].id ===id){
            index=i;
            break;
            }
        }
        const personTemp = {...this.state.person[index]};
        personTemp.value = personTemp.value + this.state.penalty;
        
        const person = [...this.state.person]
        person[index] = personTemp;

        this.setState({
            person
        })
        console.log("total"+this.state.total);
    }

    subMoneyHandler = (event, id) =>{
        var index=0;
        for(var i=0;i<this.state.person.length;i++){
            if(this.state.person[i].id ===id){
            index=i;
            break;
            }
        }
        const personTemp = {...this.state.person[index]};
        personTemp.value = personTemp.value - this.state.penalty;
        const person = [...this.state.person]
        person[index] = personTemp;

        this.setState({
            person
        })
        console.log("total"+this.state.total);
    }

    render(){
    return (
    <div>
        <input type="text" onChange={event => this.changeHandler(event)}></input>
        <button onClick={this.addpersonHandler}>Add a Person</button>
        <p>Total : {this.total}</p>
        <p>Penalty : {this.state.penalty}</p>
        <input type="number" onChange={this.changePenaltyHandler}></input>
        {
            this.state.person.map((person) => {
                return <Addperson 
                    name={person.username}
                    value={person.value}
                    addHandler={(event) => this.addMoneyHandler(event,person.id)}
                    subHandler={(event) => this.subMoneyHandler(event,person.id)}
                />
            }
            )
        }
    </div>
    );
}
}

export default Person;
