import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResult(props.searchText)}
            {(!props.loading && !props.error) && props.filteredTodos.map(props.children)}
        </section>
    );
}

export { TodoList };