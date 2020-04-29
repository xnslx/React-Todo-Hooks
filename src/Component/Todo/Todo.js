import React from 'react'

const Todo = ({todo, index, toggleTodo, deleteTodo}) => {
    return (
        <>
            <ul 
                key={todo.index} 
                style={{listStyle: 'none'}}>
                <li style={{textDecoration: todo.checked? 'line-through' : 'none'}}>
                    {todo.text}
                </li>
            </ul>
            <input type="checkbox" checked={todo.checked}onClick={() => toggleTodo(index) }/>
            <button onClick={() => deleteTodo(index)}>X</button>
        </>
    )
};

export default Todo;
