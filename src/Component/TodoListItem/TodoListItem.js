import React, {useState} from 'react';

const TodoListItem = ({id, todo, todolist}) => {
    const [check, setCheck] = useState(false);
    const [todoItem, setTodoItem] = useState(todolist)
    // console.log(todoItem)

    const removeHandler = (index) => {
        const removedTodo = todoItem.splice(index, 1);
        const updatedTodo = [...todoItem]
        setTodoItem(updatedTodo)
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
            <button onClick={() => removeHandler(todo.index)}>X</button>
        </ul>
    )
};

export default TodoListItem;
