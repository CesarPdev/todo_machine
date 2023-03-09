import React from 'react';
import { TodoContext } from '../TodoContext';
import './NewTodoForm.css';

function NewTodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const { addTodo, setOpenNewModal } = React.useContext(TodoContext);

    const onTyping = (event) => {
        setNewTodoValue(event.target.value);
    };
    
    const onCancel = () => {
        setOpenNewModal(false);
    };
    const onSubmit = (event) => {
        addTodo(newTodoValue);
        setOpenNewModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>New TODO</label>
            <textarea 
                value={newTodoValue}
                onChange={onTyping}
                placeholder='Write anything you want TODO'
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