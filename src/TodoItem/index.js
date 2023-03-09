import React from "react";
import './TodoItem.css';
import checkClipboard from '../icons/check-clipboard.svg';
import deleteClipboard from '../icons/delete-clipboard.svg';

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <div
                title="Complete this TODO"
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}            
            >
                <img src={checkClipboard} alt='check'/>
            </div>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
                onClick={props.onComplete}
            >
                {props.text}
            </p>
            <div
                title="Delete this TODO"
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <img src={deleteClipboard} alt='delete'/>
            </div>
        </li>
    );
};

export { TodoItem };