import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Note from './Note'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Route path='/notes' render={(routerProps) => 
          <Note {...routerProps}{...this.state} />}/>
      </div>
    );
  }
}

export default App;
