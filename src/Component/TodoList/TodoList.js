import React from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
    const todoList = [
        {
            id:1,
            text: 'pick up my daughter'
        },
        {
            id:2,
            text: 'keep learning React'
        },
        {
            id:3,
            text: 'start doing a new React project'
        },
        {
            id:4,
            text: 'go shopping'
        }
    ]
    return (
        <div>
            {todoList.map(item => (
                <TodoListItem key={item.id} id={item.id} todo={item.text}/>
            ))}
        </div>
    )
};

export default TodoList;
