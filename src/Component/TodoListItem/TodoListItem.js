import React from 'react';


const TodoListItem = ({id, todo}) => {
    return (
        <ul key={id}>
            <li>{todo}</li>
        </ul>
    )
};

export default TodoListItem;
