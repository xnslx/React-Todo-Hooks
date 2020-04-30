import React, {useState} from 'react';
import './App.css';
import Todo from './Component/Todo/Todo';
import TodoForm from './Component/TodoForm/TodoForm';

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
    const newTodo = [...todos, {text}];
    setTodos(newTodo);
  }

  return (
    <div className="App">
      <p>Todo List</p>
      <TodoForm addTodo={addTodo}/>
      {todos.map((todo,index) => (
        <Todo 
          todo={todo} 
          key={index} 
          index={index}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  )
}

export default App;
