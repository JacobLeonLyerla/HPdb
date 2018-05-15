import React, { Component } from 'react';
import axios from 'axios';
import {Route} from 'react-router-dom';


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
        this.setState({people:wizard.data})
        })
        .catch(hex=>{
           console.log(hex)
        })
    }
    render(){
        console.log(this.state)
        return(
            <div>test</div>
        )
    }
}
export default Gryffindor