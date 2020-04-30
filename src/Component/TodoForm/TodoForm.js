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
                style={{width: '50%', height:'40px', borderRadius: '8px',borderStyle: 'none', paddingLeft: '12px'}}
            />
            <button onClick={handleSubmit} style={{backgroundColor: '#f7cd00', borderStyle: 'none', height:'40px', borderRadius: '8px', marginLeft: '12px', padding: '12px', color: '#fff', fontWeight: '600'}}>Submit</button>
        </div>
    )
};

export default TodoForm;
