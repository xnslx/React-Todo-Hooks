import React from 'react';

const Todo = ({todo, index, toggleTodo, deleteTodo}) => {
    // console.log(todo)
    return (
        <div style={{marginTop: '36px'}}>
            <ul 
                key={todo.index} 
                style={{listStyle: 'none'}}>
                <input 
                    type="checkbox" 
                    checked={todo.checked}
                    onChange={() => toggleTodo(index)}
                    style={{marginRight: '12px', fontSize: '24px'}}
                />
                <p style={{textDecoration: todo.checked? 'line-through' : 'none', display:'inline', fontSize:'18px'}}>
                    {todo.text}
                </p>
                <button onClick={() => deleteTodo(index)} style={{marginLeft: '12px', color: '#fff', backgroundColor: '#f7cd00',borderStyle: 'none', borderRadius: '4px'}}>X</button>
            </ul>
        </div>
    )
};

export default Todo;
