import React from 'react';


const TodoListItem = ({id, todo, checked}) => {
    return (
        <ul key={id} style={{textDecoration: 'none', listStyle: 'none'}}>
            <input 
                type="checkbox" 
                onChange={checked}
            />
            <li>{todo}</li>
            <button>X</button>
        </ul>
    )
};

export default TodoListItem;
