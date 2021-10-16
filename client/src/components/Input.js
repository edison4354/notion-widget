import React, { Component } from 'react';
import axios from 'axios';
import './Input.css';

class Input extends Component {
  state = {
    color: '',
    colorOne: '',
  };

  addTodo = () => {
    const task = { color: this.state.color, colorOne: this.state.colorOne };

    if (task.color && task.color.length > 0 && task.colorOne && task.colorOne.length > 0) {
      axios
        .post('/api/todos', task)
        .then((res) => {
          if (res.data) {
            this.props.getTodos();
            this.setState({ color: '' });
            this.setState({ colorOne: '' });
          }
        })
        .catch((err) => console.log(err));
    } else {
      console.log('input field required');
    }
  };

  handleChange = (e) => {
    // console.log([e.target.name], e.target.value)
    this.setState({
      [e.target.name]: e.target.value 
    });
  };

  render() {
    let { color, colorOne } = this.state;
    return (
      <div class="inputComponent">
        <hr/>
        <p>STYLE</p>
        <label class="labelColor" for="bgColor">Choose the background color: <p>(hex code)</p></label>
        <input type="text" name="color" onChange={this.handleChange} value={color} />
        <label class="labelColor">Choose the main element color:<p>(hex code)</p></label>
        <input type="text" name="colorOne" onChange={this.handleChange} value={colorOne} />
        <button class="inputSave" onClick={this.addTodo}>Save</button>
        <div class="linkContainer">
          <p>COPY LINK (THEN PASTE INTO NOTION, AND CLICK "EMBED")</p>
          <input class="embedLink" value="https://catkin-numerous-slug.glitch.me"/>
        </div>
      </div>
    );
  }
}

export default Input;