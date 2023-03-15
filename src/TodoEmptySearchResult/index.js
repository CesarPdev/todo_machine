import React from "react";

function TodoEmptySearchResult (props) {
    return(
        <section 
            className="TodoList"
        >
            <p>Sin resultados para {props.searchText}</p>
        </section>
    );
}

export { TodoEmptySearchResult };