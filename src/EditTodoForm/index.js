import React from 'react';
import './EditTodoForm.css';

function EditTodoForm(props) {
    return(
        <div className="modal">
            <form onSubmit={handleEditItem}>
                <label>Date:</label>
                <input type="text" value={items[editIndex].date} onChange={(e) => setItems(prevItems => {
                    const updatedItems = [...prevItems];
                    updatedItems[editIndex].date = e.target.value;
                    return updatedItems;
                })} />
                <label>Hour:</label>
                <input type="text" value={items[editIndex].hour} onChange={(e) => setItems(prevItems => {
                    const updatedItems = [...prevItems];
                    updatedItems[editIndex].hour = e.target.value;
                    return updatedItems;
                })} />
                <label>Text:</label>
                <input type="text" value={items[editIndex].text} onChange={(e) => setItems(prevItems => {
                    const updatedItems = [...prevItems];
                    updatedItems[editIndex].text = e.target.value;
                    return updatedItems;
                })} />
                <button type="submit">Save</button>
                <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
            </form>
        </div>
    );
}

export { EditTodoForm };