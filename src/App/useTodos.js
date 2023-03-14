import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";

function useTodos() {

    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOS_V1', []);
    const [searchValue, setSearchValue] = React.useState('');
    const [openNewModal, setOpenNewModal] = React.useState(false);
    
    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    let filteredTodos = ['hacer las compras'];
    if (!searchValue.length >= 1) {
        filteredTodos = todos;
    } else {
        filteredTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        };
        saveTodos(newTodos);
    };

    const addTodo = (date, hour, value) => {
        const newTodos = [...todos];
        newTodos.push({
            text: `${date} ${hour} ${value}`,
            completed: false
        });
        newTodos.sort((x, y) => x.text.localeCompare(y.text));
        saveTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };
    return {
            error,
            loading,
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredTodos,
            addTodo,
            completeTodo,
            deleteTodo,
            openNewModal,
            setOpenNewModal
        };
}

export { useTodos };