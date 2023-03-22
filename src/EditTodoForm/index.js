import React from 'react';
import './EditTodoForm.css';

function EditTodoForm({ editTodo, setOpenEditModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('');
    const [newTodoDate, setNewTodoDate] = React.useState('');
    const [newTodoHour, setNewTodoHour] = React.useState('');

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
        setOpenEditModal(false);
    };
    const onSubmit = (event) => {
        editTodo(newTodoDate, newTodoHour, newTodoValue);
        setOpenEditModal(false);
    };

    return(
        <form onSubmit={onSubmit}>
            <div className='DateTime-container'>
                <input 
                    value={editTodo.date}
                    type={'date'}
                    onChange={onTypingDate}
                />
                <input 
                    value={editTodo.hour}
                    type={'time'}
                    onChange={onTypingHour}
                />
            </div>
            <textarea 
                value={editTodo.text}
                onChange={onTypingTodo}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    type='button'
                    className='TodoForm-button TodoForm-button--cancel'
                    onClick={onCancel}
                >
                    Cancelar
                </button>
                <button
                    type='submit'
                    className='TodoForm-button TodoForm-button--add'
                    onClick={onSubmit}
                >
                    Aceptar
                </button>
            </div>
        </form>
    );
}

export { EditTodoForm };