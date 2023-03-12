import React from "react";
import { TodoContext } from "../TodoContext/index.js";
import { TodoCounter } from '../TodoCounter/index.js'
import { TodoList } from '../TodoList/index.js'
import { TodoItem } from "../TodoItem/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { CreateTodoButton } from "../CreateTodoButton/index.js";
import { Modal } from "../Modal/index.js";
import { NewTodoForm } from "../NewTodoForm/index.js";
import yayHappy from '../icons/yay-happy.svg';
import '../TodoList/TodoList.css';

function AppUI() {

    const {
        error,
        loading,
        filteredTodos,
        completeTodo,
        deleteTodo,
        openNewModal,
        setOpenNewModal,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>

        <TodoCounter />

        <TodoSearch />

        <TodoList>
        {error && <p>Hubo un error...</p>}
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
                <NewTodoForm />
            </Modal>
        )}                
        <CreateTodoButton
            setOpenNewModal={setOpenNewModal}
        />
                
    </React.Fragment>
    );
};

export { AppUI };