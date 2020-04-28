import React, {useState} from 'react';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = () => {
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
        <div>
            {todoList.map(item => (
                <TodoListItem 
                    key={item.id} 
                    id={item.id} 
                    todo={item.text}
                    todolist={todoList}
                />
            ))}
        </div>
    )
};

export default TodoList;
