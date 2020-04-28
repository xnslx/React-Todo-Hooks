import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

const Todo = ({todolist}) => {
    console.log(todolist)
    return (
        <ul>
            {todolist.map((item,index) => (
                <TodoItem todo={item} key={index} index={index}/>
            ))}
        </ul>
    )
}

export default Todo;
