import React from 'react';
import './EditTodoForm.css';

function EditTodoForm({ editTodo, setOpenEditModal }) {
    const [editTodoValue, setEditTodoValue] = React.useState('');

    const onTypingTodo = (event) => {
        setEditTodoValue(event.target.value);
    };

    const onCancel = () => {
        setOpenEditModal(false);
    };
    const onSubmit = (event) => {
        if (!!editTodoValue) {
        editTodo(editTodoValue)};
        setOpenEditModal(false);
    };
    return(
        <form onSubmit={onSubmit}>
            <label>Editar TODO</label>
            
            <textarea 
                value={editTodoValue}
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