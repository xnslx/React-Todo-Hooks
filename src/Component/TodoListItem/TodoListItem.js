import React, {useState} from 'react';

const TodoListItem = ({id, todo, checkHandler}) => {
    const [check, setCheck] = useState(false)
    return (
        <ul key={id} style={{textDecoration: 'none', listStyle: 'none'}}>
            <input 
                type="checkbox"
                onClick={() => setCheck({checked: !check.checked})}
            />
            <li style={{textDecoration: check.checked? 'line-through' : 'none'}}>{todo}</li>
            <button>X</button>
        </ul>
    )
};

export default TodoListItem;
