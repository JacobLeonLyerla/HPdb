import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';
import People from './People'
import Person from'./Person'

class Gryffindor extends Component{

    state={
        people:[]
    }
    componentDidMount(){
        this.getWizards()
    }

    getWizards =()=>{
        axios
        .get('http://localhost:5000/gryffindor')
    
        .then(wizard =>{
            console.log(wizard)
        this.setState({people:wizard.data})
        })
        .catch(hex=>{
           console.log(hex)
        })
    }
    render(){
        console.log(this.state)
        return(<div>
         <Route exact path ='/gryffindor'
         render ={props=><People {...props} people={this.state.people}/>}
         />

         <Route path ='/griffindorperson/:id' component={Person}/>
        </div>)
    }
}
export default Gryffindor