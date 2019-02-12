import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import Note from './Note'
import NewNote from './NewNote'
import './App.css';
import axios from 'axios'


class App extends Component {

  constructor(props) {
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
      .then(() => {
        window.location = "/"
      })
  }

  new(event) {
    event.preventDefault();
    console.log(event.target.name)
    axios({
      method: 'post',
      url: `/note/${this.state.name}/update`,
      data: {
        title: `${this.state.name}`,
       content: `${this.state.content}`
      }
    });
  }

  render() {
    return (
      <div>
        <nav>
          <ul>
            <Link to='notes/create'><li>Create New Note</li></Link>
          </ul>
        </nav>
        <div>
          <Route path='/' exact render={(routerProps) => <Note delete={this.delete}{...routerProps}{...this.state} />} />
          <Route path='/notes/create' exact render={(routerProps) => <NewNote new={this.new}{...routerProps}{...this.state} />} />
          {console.log('app rendered')}
        </div>
      </div>
    );
  }
}

export default App;
