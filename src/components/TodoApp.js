import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { cloneDeep } from "lodash";
import Navbar from "./Navbar";

const TodoApp = () => {
    const [todos , setTodos] = useState([]);
    const [filteredTodos , setFilteredTodos] = useState(null);
    const addTodo = (input) => {
        
        const newTodo = {
            id : Math.floor(Math.random() * 1000) ,
            text : input ,
            isCompleted : false
        }

        setTodos([...todos , newTodo]);
        if(filteredTodos) setFilteredTodos([...filteredTodos , newTodo]);
    }

    const completeTodo  = (id) => {
        const copiedTodos = cloneDeep(todos);
        const selectedTodo = copiedTodos.find(todo => todo.id === id);
        selectedTodo.isCompleted = !selectedTodo.isCompleted;
        setTodos(copiedTodos);
    }

    const deleteTodo = (id) => {
        const copiedTodos = cloneDeep(todos);
        const filteredTodos = copiedTodos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    const updateTodo = (id , newValue) => {
        const copiedTodos = cloneDeep(todos);
        const selectedTodo = copiedTodos.find(todo => todo.id === id);
        selectedTodo.text = newValue;
        setTodos(copiedTodos);
    }

    //added by me

    const [edit , setEdit] = useState({id : null , text : ""});
    const editTodo = (newValue) => {
        updateTodo(edit.id , newValue);
        setEdit({id : null , text : ""});
    }

    const filterTodos = (selectedOption) => {
        const filterValue = selectedOption.value;
        if(filterValue === "all") {
            setFilteredTodos(null);
            setTodos(todos);
        }
        else if(filterValue === "completed") {
            const filteredTodos = todos.filter(t => t.isCompleted === true);
            setFilteredTodos(filteredTodos);
        }
        else {
            const filteredTodos = todos.filter(t => t.isCompleted === false);
            setFilteredTodos(filteredTodos);
        }
    }

    return ( 
        // <div className="container">
        //     <TodoForm submitTodo = {addTodo}/>
        //     <Navbar remainingTodos={todos.filter(t => t.isCompleted === false).length}/>
        //     <TodoList todos={todos} onComplete={completeTodo} onDelete={deleteTodo} onUpdate={updateTodo}/>
        // </div>
        <div className="container">
            {edit.id ? 
                (
                <>
                    <TodoForm submitTodo = {editTodo} edit = {edit} /> 
                </>
                )
                :
                (<>
                    <TodoForm submitTodo = {addTodo}/>
                    <Navbar remainingTodos={todos.filter(t => t.isCompleted === false).length} onFilter={filterTodos}/>
                    <TodoList todos={filteredTodos  ? filteredTodos : todos} onComplete={completeTodo} onDelete={deleteTodo} onEdit={setEdit}/>
                </>)
            }
        </div>
     );
}
 
export default TodoApp;