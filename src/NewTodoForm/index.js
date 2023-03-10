import React from 'react';
import { TodoContext } from '../TodoContext';
import './NewTodoForm.css';

function NewTodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoDate, setNewTodoDate] = React.useState('');
    const [newTodoHour, setNewTodoHour] = React.useState('');
    const { addTodo, setOpenNewModal } = React.useContext(TodoContext);

    const onTypingTodo = (event) => {
        setNewTodoValue(event.target.value);
    };

    const onTypingDate = (event) => {
        setNewTodoDate(event.target.value);
    };
        
    const onTypingHour = (event) => {
        setNewTodoHour(event.target.value);
    };
        
    const onCancel = () => {
        setOpenNewModal(false);
    };
    const onSubmit = (event) => {
        addTodo(`${newTodoDate} ${newTodoHour} ${newTodoValue}`);
        setOpenNewModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>New TODO</label>
            <div className='DateTime-container'>
                <input 
                    value={newTodoDate}
                    type={'date'}
                    onChange={onTypingDate}
                />
                <input 
                    value={newTodoHour}
                    type={'time'}
                    onChange={onTypingHour}
                />
            </div>
            <textarea 
                value={newTodoValue}
                onChange={onTypingTodo}
                placeholder='Your TODO'
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                    onClick={onSubmit}
                >
                    Add
                </button>
            </div>
        </form>
    );
}

export { NewTodoForm };