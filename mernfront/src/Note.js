import React, { Component } from 'react';
import Link from 'react-router-dom'
// import axios from 'axios'

class Note extends Component {

  render() {

    const noteList = this.props.notes.map(note => {
      console.log(note._id)
      return (
        <div>
        <h1>{note.title}</h1>
     <button type='submit' name={note._id} onClick={this.props.delete}>Delete this Note</button>
     {/* <button type='submit' name={note._id} onClick={this.props.delete}>Update this Note</button> */}
        </div>
        )
    });

    return (
      <div>
        <div className='Note'>
          <h1>sup</h1>
          {noteList}

        </div>
      </div>
    );
  }
}

export default Note;