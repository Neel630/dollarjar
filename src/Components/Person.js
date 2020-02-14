import React, { Component } from 'react';
import Addperson from './Addperson'

class Person extends Component {
    constructor(){
        super();
        this.state =({
        newperson:"",
        count:0,
        person:[],
        penalty:10,
        total:0
      })

    }

      changePenaltyHandler (event){
        let temp = parseInt(event.target.value)
        this.setState({
            penalty :  temp
        }
        )
    }


      addpersonHandler = (event) => {
        event.preventDefault();
        console.log(this.state.person);
        // For adding new Person
        let idval = this.state.count;
        let temp = {username: this.state.newperson,value:0, id:idval}
        let stringTrim = this.state.newperson;
        if(stringTrim.trim()!=""){
            idval=idval+1;
            let arr = this.state.person;
            arr.push(temp);
            this.setState({
                person:arr,
                count:idval
            })
        }
        
        let tempnewperson = "";
        this.setState({
            newperson:tempnewperson
        })

        }
      

      changeHandler(event){
        event.preventDefault();
            this.setState({
                newperson :  event.target.value
            }
            )
        }


    addMoneyHandler (event, id) {
        let index=0;
        for(let i=0;i<this.state.person.length;i++){
            if(this.state.person[i].id ==id){
                console.log("i "+i);
            index=i;
            break;
            }
        }
        
        let temptotal = this.state.total;
        console.log("index "+index)
        const personTemp = {...this.state.person[index]};
        if(!isNaN(this.state.penalty)){
            temptotal = temptotal + this.state.penalty;
            personTemp.value = personTemp.value + this.state.penalty;
        }
        
        const person = [...this.state.person]
        person[index] = personTemp;
        

        this.setState({
            person:person,
            total:temptotal
        })
    }

    subMoneyHandler(event, id){
        let index=0;
        for(let i=0;i<this.state.person.length;i++){
            if(this.state.person[i].id ==id){
            index=i;
            break;
            }
        }

        let temptotal = this.state.total;
        const personTemp = {...this.state.person[index]};
        if(!isNaN(this.state.penalty)){
            temptotal = temptotal - this.state.penalty;
            personTemp.value = personTemp.value - this.state.penalty;
        }
       
        const person = [...this.state.person]
        person[index] = personTemp;
        

        this.setState({
            person:person,
            total:temptotal
        })
        

    }


    render(){


    return (
    <div className="container">
        <form>
        <input type="text" value={this.state.newperson} onChange={this.changeHandler.bind(this)}></input>
        <button onClick={(event)=>this.addpersonHandler(event)}>Add a Person</button>
        </form>
        <p>Total : {this.state.total}</p>
        <p>Penalty : {this.state.penalty}</p>
        <input type="number" value={this.state.penalty} onChange={this.changePenaltyHandler.bind(this)}></input>
        {
            this.state.person.map((person) => {
                console.log("person id "+person.id);
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
