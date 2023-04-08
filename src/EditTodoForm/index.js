import React from 'react';
import './EditTodoForm.css';

function EditTodoForm({ editableTodo, editTodo, setOpenEditModal }) {
    const [editedDate, setEditedDate] = React.useState(editableTodo[0].date);
    const [editedHour, setEditedHour] = React.useState(editableTodo[0].hour);
    const [editedText, setEditedText] = React.useState(editableTodo[0].text);
    
    const onTypingTodo = (event) => {
        setEditedText(event.target.value);
    };

    const onTypingDate = (event) => {
        setEditedDate(event.target.value);
    };
        
    const onTypingHour = (event) => {
        setEditedHour(event.target.value);
    };
        
    const onCancel = () => {
        setOpenEditModal(false);
    };
    const onSubmit = (event) => {
        event.preventDefault();
        editTodo(editableTodo, editedDate, editedHour, editedText);
        setOpenEditModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Editar TODO</label>
            <div className='DateTime-container'>
                <input 
                    value={editedDate}
                    type={'date'}
                    onChange={onTypingDate}
                />
                <input 
                    value={editedHour}
                    type={'time'}
                    onChange={onTypingHour}
                />
            </div>
            <textarea 
                value={editedText}
                onChange={onTypingTodo}
                placeholder='Agregar TODO'
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