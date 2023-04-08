import React from "react";
import { useLocalStorage } from "./useLocalStorage.js";

function useTodos() {

    const {
        item: todos,
        saveItem: saveTodos,
        sincronizeItem:sincronizeTodos,
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = React.useState('');
    const [openNewModal, setOpenNewModal] = React.useState(false);
    const [openEditModal, setOpenEditModal] = React.useState(false);
    const [editableTodo, setEditableTodo] = React.useState({});
    
    const completedTodos = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;

    let filteredTodos = [];
    if (!searchValue.length >= 1) {
        filteredTodos = todos;
    } else {
        filteredTodos = todos.filter(todo => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    };

    const addTodo = (date, hour, value) => {
        const newTodos = [...todos];
        newTodos.push({
            id: Math.floor(Math.random()*10000),
            date: date,
            hour: hour,
            text: value,
            completed: false
        });
        newTodos.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            if (a.hour < b.hour) return -1;
            if (a.hour > b.hour) return 1;
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0;
        });
        saveTodos(newTodos);
    };

    const completeTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        if (newTodos[todoIndex].completed === true) {
            newTodos[todoIndex].completed = false;
        } else {
            newTodos[todoIndex].completed = true;
        };
        saveTodos(newTodos);
    };

    const deleteTodo = (id) => {
        const todoIndex = todos.findIndex(todo => todo.id === id);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    };

    const onEditTodo = (id) => {
        setEditableTodo(todos.filter(todo => todo.id === id));
        setOpenEditModal(true);
        
    };

    const editTodo = (editableTodo, editedDate, editedHour, editedText) => {
        const todoIndex = todos.findIndex(todo => todo.id === editableTodo[0].id);
        const newTodos = [...todos];
        newTodos[todoIndex].date = editedDate;
        newTodos[todoIndex].hour = editedHour;
        newTodos[todoIndex].text = editedText;
        newTodos.sort((a, b) => {
            if (a.date < b.date) return -1;
            if (a.date > b.date) return 1;
            if (a.hour < b.hour) return -1;
            if (a.hour > b.hour) return 1;
            if (a.text < b.text) return -1;
            if (a.text > b.text) return 1;
            return 0;
        });
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
            editTodo,
            onEditTodo,
            openNewModal,
            setOpenNewModal,
            openEditModal,
            setOpenEditModal,
            editableTodo,
            setEditableTodo,
            sincronizeTodos
        };
}

export { useTodos };