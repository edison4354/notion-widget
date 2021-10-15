import React from 'react';
import Todo from './components/Todo';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Todo />
      <iframe className="widgetView" src="https://catkin-numerous-slug.glitch.me" title="Music Widget"></iframe>
    </div>
  );
};

export default App;