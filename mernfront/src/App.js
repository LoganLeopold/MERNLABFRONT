import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import Note from './Note'
import './App.css';
import axios from 'axios'


class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      notes: [],
    }
    this.delete = this.delete.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }
 
  componentDidMount() {

    const url = 'http://localhost:8000/'

    axios.get(url)
      .then(response => {
        console.log(response.data)
        let note = response.data
        console.log(note)
        this.setState({
          notes: note
        });
      })
      .catch(err => {
        console.error(err)
      })

      console.log('component up')
        
    }

  delete(event) {
    event.preventDefault();
    console.log(event.target.name)
    axios.delete(`http://localhost:8000/notes/${event.target.name}/delete`)
      .then(res => {
        window.location = "/"
      })
  }

  render() {
    return (
      <div>
        <Route path='/' render={(routerProps) => <Note delete={this.delete}{...routerProps}{...this.state} />}/>
          {console.log('app rendered')}
      </div>
    );
  }
}

export default App;
