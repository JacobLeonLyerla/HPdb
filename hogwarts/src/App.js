import React, {
  Component
} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router
} from 'react-router-dom'
import './App.css';
import Gryffindor from './Gryffindor/GryffindorIndex'

class App extends Component {
  render() {
    return ( <
      div className = "App" >

      <
      Router > < Gryffindor / > < /Router>

      <
      /div>
    );
  }
}

export default App;