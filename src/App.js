import React, {useState} from 'react';
import './App.css';
import Todo from './Component/Todo/Todo';
import TodoForm from './Component/TodoForm/TodoForm';
import { v4 as uuidv4 } from 'uuid';

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
  const [todos, setTodos] = useState(todoList);

  const toggleTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].checked = !newTodo[index].checked;
    setTodos(newTodo);
  }

  const deleteTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  }

  const addTodo = (text) => {
    const updatedTodo = {
      id: uuidv4(),
      text: text,
      checked:false
    }
    const newTodo = [...todos, updatedTodo];
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} checked={todos.checked}/>
      {todos.map((todo,index) => (
        <Todo 
          todo={todo} 
          key={index} 
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          // checked={todo.checked}
        />
      ))}
    </div>
  )
}

export default App;
