import React, {useState} from 'react';

const TodoListItem = ({id, todo, todolist, index}) => {
    const [check, setCheck] = useState(false);
    const [todoItem, setTodoItem] = useState(todolist)
    console.log(todoItem)

    const removeHandler = (index) => {
        const updatedTodo = [...todolist];
        updatedTodo.splice(index, 1);
        setTodoItem(updatedTodo)
        console.log(updatedTodo)
    }
    return (
        <ul key={id} style={{textDecoration: 'none', listStyle: 'none'}}>
            <input 
                type="checkbox"
                onClick={() => setCheck({checked: !check.checked})}
            />
            <li style={{textDecoration: check.checked? 'line-through' : 'none'}}>
                {todo}
            </li>
            <button onClick={() => removeHandler(index)}>X</button>
        </ul>
    )
};

export default TodoListItem;
