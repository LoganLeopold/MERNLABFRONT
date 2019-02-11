import React, { Component } from 'react';
import axios from 'axios'

class Note extends Component {

    constructor () {
        super()
        this.state = {
            notes: []
        }
    }
    
    
    componentDidMount() {

        const url = 'http://localhost:8000/notes'
    
        axios.get(url)
          .then(response => {
            let note = response.data
            this.setState({
              notes: note
            });
          })
          .catch(err => {
            console.error(err)
          })
          console.log('Flow workin fine')   
      }
    
    render() {

        return (
            <div>
                <div class='Note'>
                    Hello
                    {/* <h1>{this.title}</h1>
                    <p>{this.content}</p> */}
                </div>
            </div>
        );
    }
}

export default Note;