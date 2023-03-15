import React from "react";
import yayHappy from '../icons/yay-happy.svg';

function TodoEmpty () {
    return(
        <section 
            className="TodoList"
        >
            <img src={yayHappy} alt='Nothing To Do'/>
            <p>Sin TODOs! Disfruta tu día.</p>
        </section>
    );
}

export { TodoEmpty };