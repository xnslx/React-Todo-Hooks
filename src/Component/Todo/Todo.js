import React, {useState} from 'react';

const Todo = ({todo, index, toggleTodo, deleteTodo}) => {
    console.log(todo)
    return (
        <>
            <ul 
                key={todo.index} 
                style={{listStyle: 'none'}}>
                <li style={{textDecoration: todo.checked? 'line-through' : 'none'}}>
                    {todo.text}
                </li>
            </ul>
            <input 
                type="checkbox" 
                checked={todo.checked}
                onChange={() => toggleTodo(index)}
            />
            <button onClick={() => deleteTodo(index)}>X</button>
        </>
    )
};

export default Todo;
