import React from "react";
import './CreateTodoButton.css';

function CreateTodoButton(props) {
    
    const onClickButton = () => {
        props.setOpenNewModal(true);
    };
    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            Nuevo TODO
        </button>
    );
};

export { CreateTodoButton };