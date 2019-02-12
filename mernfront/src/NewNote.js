import React, { Component } from 'react';

class NewNote extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            content: '',
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    render() {
        return (
            <div>
                <form>
                    <input name='title' placeholder='Title' value={this.state.name} onChange={this.handleChange}></input>
                    <input name='content' placeholder='Note'value={this.state.password} onChange={this.handleChange}></input>
                    <button type='submit' onClick={this.props.new}>Create this Note</button>
                </form>
            </div>
        );
    }
}

export default NewNote;