import React, { Component } from 'react';
import axios from 'axios';
import './Input.css';

class Input extends Component {
  state = {
    bgColor: '',
    mainColor: '',
    buttonColor: '',
  };

  addTodo = () => {
    const task = { 
      bgColor: this.state.bgColor,
      mainColor: this.state.mainColor,
      buttonColor: this.state.buttonColor
    };

    if (task.bgColor && task.bgColor.length > 0) {
      axios
        .post('/api/todos', task)
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ bgColor: '' });
            this.setState({ mainColor: '' });
            this.setState({ buttonColor: '' });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  render() {
    let { bgColor, mainColor, buttonColor } = this.state;
    return (
      <div class="inputComponent">
        <hr/>
        <p>STYLE</p>
        <form>
          <label class="labelColor" for="bgColor">Choose the background color:</label>
          <input 
            type="text"
            name="bgColor" 
            onChange={this.handleChange} 
            value={bgColor} 
          />

          <label class="labelColor">Choose the main element color:</label>
          <input 
            type="text" 
            name="mainColor"
            onChange={this.handleChange} 
            value={mainColor} 
          />

          <label class="labelColor">Choose the main button color:</label>
          <input 
            type="text" 
            name="buttonColor"
            onChange={this.handleChange} 
            value={buttonColor} 
          />
        </form>
        <button class="inputSave" onClick={this.addTodo}>Save</button>
      </div>
    );
  }
}

export default Input;