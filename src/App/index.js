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
        openNewModal,
        setOpenNewModal,
        isModalOpen,
        setIsModalOpen,
        editIndex,
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
                        key={todo.text}
                        date={todo.date}
                        hour={todo.hour}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
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
            
            {/* {isModalOpen && (
                <div className="modal">
                    <form onSubmit={handleEditItem}>
                    <label>Date:</label>
                    <input type="text" value={todos[editIndex].date} onChange={(e) => setItems(prevItems => {
                        const updatedItems = [...prevItems];
                        updatedItems[editIndex].date = e.target.value;
                        return updatedItems;
                    })} />
                    <label>Hour:</label>
                    <input type="text" value={todos[editIndex].hour} onChange={(e) => setItems(prevItems => {
                        const updatedItems = [...prevItems];
                        updatedItems[editIndex].hour = e.target.value;
                        return updatedItems;
                    })} />
                    <label>Text:</label>
                    <input type="text" value={todos[editIndex].text} onChange={(e) => setItems(prevItems => {
                        const updatedItems = [...prevItems];
                        updatedItems[editIndex].text = e.target.value;
                        return updatedItems;
                    })} />
                    <button type="submit">Save</button>
                    <button type="button" onClick={() => setIsModalOpen(false)}>Cancel</button>
                    </form>
                </div>
            )} */}


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
