import React, {useState} from 'react'

const TodoForm = ({addTodo, checked}) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (e) => {
        if(inputValue === '') {
            e.preventDefault();
        } else {
            addTodo(inputValue);
        }
        setInputValue('');
    }
    return (
        <div>
            <input 
                type="text"
                placeholder="Add todo..."
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
            />
            <button onClick={handleSubmit}>submit</button>
        </div>
    )
};

export default TodoForm;
