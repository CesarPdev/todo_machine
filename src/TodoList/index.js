import React from "react";
import './TodoList.css';

function TodoList(props) {
    return (
        <section className="TodoList">
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalTodos) && props.onEmpty()}
            {(!!props.totalTodos && !props.filteredTodos.length) && props.onEmptySearchResult()}
            {props.filteredTodos.map(props.children)}
            <ul>
                {props.children}
            </ul>
        </section>
    );
}

export { TodoList };