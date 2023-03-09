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
            New TODO
        </button>
    );
};

export { CreateTodoButton };