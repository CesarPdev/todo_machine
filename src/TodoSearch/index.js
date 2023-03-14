import React from "react";
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {    
    const onSearchChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div
        className="TodoSearch-container"
        >
            <input
            className="TodoSearch"
            placeholder="Buscar"
            value={searchValue}
            onChange={onSearchChange}
            />
        </div>
    );
}

export { TodoSearch };