import React from "react";
import './TodoItem.css';
import checkClipboard from '../icons/check-clipboard.svg';
import deleteClipboard from '../icons/delete-clipboard.svg';

function TodoItem(props) {
    
    return (
        <li className="TodoItem">
            <div
                title="Mark completed"
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onComplete}            
            >
                <img src={checkClipboard} alt='check'/>
            </div>
            <p
                className={`TodoItem-p ${props.completed && 'TodoItem-p--completed'}`}
                onClick={props.onEdit}
            >
                {props.date} {props.hour} {props.text}
            </p>
            <div
                title="Delete"
                className="Icon Icon-delete"
                onClick={props.onDelete}
            >
                <img src={deleteClipboard} alt='delete'/>
            </div>
        </li>
    );
};

export { TodoItem };