import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoHeader } from '../TodoHeader/index.js';
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from '../TodoList/index.js'
import { TodoError } from '../TodoError/index.js';
import { TodoLoading } from '../TodoLoading/index.js';
import { TodoEmpty } from '../TodoEmpty/index.js';
import { TodoEmptySearchResult } from '../TodoEmptySearchResult/index.js';
import { TodoItem } from '../TodoItem/index.js';
import { CreateTodoButton } from '../CreateTodoButton/index.js';
import { Modal } from '../Modal/index.js';
import { NewTodoForm } from '../NewTodoForm/index.js';
import { EditTodoForm } from "../EditTodoForm/index.js";
import { ChangeAlert } from '../ChangeAlert/index.js';


function App() {
    const {
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
        editableTodo,
        editTodo,
        onEditTodo,
        openNewModal,
        setOpenNewModal,
        openEditModal,
        setOpenEditModal,
        sincronizeTodos
    } = useTodos();

    return (
        <React.Fragment>

            <TodoHeader loading={loading}>
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList
                error={error}
                loading={loading}
                filteredTodos={filteredTodos}
                totalTodos={totalTodos}
                searchText={searchValue}
                onError ={() => <TodoError />}
                onLoading={() => <TodoLoading />}
                onEmpty={() => <TodoEmpty />}
                onEmptySearchResult={(searchText) =>
                    <TodoEmptySearchResult searchText={searchText}/>}
            >
                {todo => (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        date={todo.date}
                        hour={todo.hour}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onDelete={() => deleteTodo(todo.id)}
                        onEdit={() => onEditTodo(todo.id)}
                        setOpenEditModal={setOpenEditModal}
                    />
                )}
            </TodoList>
            
            {!!openNewModal && (
                <Modal>
                    <NewTodoForm
                    addTodo={addTodo}
                    setOpenNewModal={setOpenNewModal}
                    />
                </Modal>
            )}

            {!!openEditModal && (
                <Modal>
                    <EditTodoForm
                    editableTodo={editableTodo}
                    editTodo={editTodo}
                    setOpenEditModal={setOpenEditModal}
                    />
                </Modal>
            )}

            <CreateTodoButton
                setOpenNewModal={setOpenNewModal}
            />

            <ChangeAlert
                sincronize={sincronizeTodos}
            />

        </React.Fragment>
    
    );
}

export default App;
