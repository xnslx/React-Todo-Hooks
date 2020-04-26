import React from 'react';
import './App.css';
import TodoList from './Component/TodoList/TodoList';


const App = () => {
  return (
    <div className="App">
      <p>Todo List</p>
      <TodoList />
    </div>
  )
}

export default App;
