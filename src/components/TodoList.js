import Todo from "./Todo";

// const TodoList = ({todos , onComplete , onDelete , onUpdate}) => {
    // const [edit , setEdit] = useState({id : null , text : ""});
    // const editTodo = (newValue) => {
    //     onUpdate(edit.id , newValue);
    //     setEdit({id : null , text : ""});
    // }
const TodoList = ({todos , onComplete , onDelete , onEdit}) => {
    const renderTodos = () => {
        if(todos.length === 0)
            return <p></p>;
        return todos.map(todo => 
        <Todo 
            key={todo.id} 
            todo={todo} 
            onComplete={() => onComplete(todo.id)} 
            onDelete={() => onDelete(todo.id)}
            // onEdit={() => setEdit(todo)}
            onEdit={() => onEdit(todo)}
        />)
    };
    // return <div>{edit.id ? <TodoForm submitTodo = {editTodo} edit = {edit} /> : renderTodos()}</div>
    return <div>{renderTodos()}</div>
}
 
export default TodoList;