import React from 'react';
import './App.css';
import Todo from './Component/Todo/Todo';


const App = () => {
  const todoList = [
    {
        id:1,
        text: 'pick up my daughter',
        checked: false
    },
    {
        id:2,
        text: 'keep learning React',
        checked: false
    },
    {
        id:3,
        text: 'start doing a new React project',
        checked: false
    },
    {
        id:4,
        text: 'go shopping',
        checked: false
    }
]
  
  return (
    <div className="App">
      <p>Todo List</p>
      <Todo todolist={todoList}/>
    </div>
  )
}

export default App;
