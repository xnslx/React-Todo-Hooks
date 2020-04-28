import React from 'react'

const TodoItem = ({todo, index}) => {
    console.log(todo)
    return (
        <li key={todo.index} style={{listStyle: 'none'}} index={index}>
            {todo.text}
        </li>
    )
};

export default TodoItem;
