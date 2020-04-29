import React, {useState} from 'react'

const TodoForm = ({addTodo}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        addTodo(inputValue);
        setInputValue('')
    }
    return (
        <div>
            <input 
                type="text"
                placeholder="Add todo..."
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={() => handleSubmit()}>submit</button>
        </div>
    )
};

export default TodoForm;
