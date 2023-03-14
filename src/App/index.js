import React from "react";
import { useTodos } from "./useTodos.js";
import { TodoHeader } from "../TodoHeader/index.js";
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoList } from '../TodoList/index.js'
import { TodoError } from "../TodoError/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";
import { NewTodoForm } from "../NewTodoForm/index.js";
import yayHappy from '../icons/yay-happy.svg';


function App() {
    const {
        error,
        loading,
        filteredTodos,
        completeTodo,
        deleteTodo,
        openNewModal,
        setOpenNewModal,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
    } = useTodos();

    return (
        <React.Fragment>

            <TodoHeader>
                <TodoCounter
                    completedTodos={completedTodos}
                    totalTodos={totalTodos}        
                />

                <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                />
            </TodoHeader>

            <TodoList>
                {error && <TodoError />}
                {loading && <p>Cargando...</p>}
                {(!loading && !filteredTodos.length) &&
                <section 
                    className="TodoList"
                >
                    <img src={yayHappy} alt='Nothing To Do'/>
                    <p>Sin TODOs! Disfruta tu día.</p>
                </section>}
                {filteredTodos.map(todo => (
                <TodoItem
                    key={todo.text}
                    text={todo.text}
                    completed={todo.completed}
                    onComplete={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
            ))}
            </TodoList>
            
            {!!openNewModal && (
                <Modal>
                    <NewTodoForm
                    addTodo={addTodo}
                    setOpenNewModal={setOpenNewModal}
                    />
                </Modal>
            )}                
            <CreateTodoButton
                setOpenNewModal={setOpenNewModal}
            />
                    
        </React.Fragment>
    
    );
}

export default App;
