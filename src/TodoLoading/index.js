import React from "react";
import './TodoLoading.css';

function TodoLoading () {
    return (
        <div className="loading-container">
            <div className="loading"></div>
            <p>Cargando lista...</p>
        </div>
    );
}

export { TodoLoading };