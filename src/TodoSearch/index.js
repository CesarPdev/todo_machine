import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoSearch.css';

function TodoSearch() {
    const { searchValue, setSearchValue } = React.useContext(TodoContext);
    
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