import React, { Component } from 'react';
import axios from 'axios';
import Input from './Input';

class Todo extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.getTodos();
  }

  getTodos = () => {
    axios
      .get('/api/todos')
      .then((res) => {
        if (res.data) {
          this.setState({
            todos: res.data,
          });
        }
      })
      .catch((err) => console.log(err));
  };


  render() {
    return (
      <div class='widgetConfigPage'>
        <h2>Notion Widget</h2>
        <Input getTodos={this.getTodos} />
      </div>
    );
  }
}

export default Todo;