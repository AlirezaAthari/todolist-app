import { useEffect, useRef, useState } from "react";

const TodoForm = (props) => {
    const [input , setInput] = useState("");
    const inputRef = useRef(null);
    useEffect(() => {
        if(props.edit) setInput(props.edit.text)
        inputRef.current.focus();
    } , [props.edit])
    const changeHandler = (e) => {
        setInput(e.target.value);
    }
    const submitHandler = (e) => {
        e.preventDefault();

        if(input === ""){
            alert("enter todo!");
            return;
        }

        props.submitTodo(input);
        setInput("");
    }
    return ( 
        <div>
            <form onSubmit={submitHandler} className="formControl">
                <input type="text" value={input} onChange={changeHandler} placeholder= {`to ${props.edit ? "Update" : "Add"} ...`} ref={inputRef}></input>
                <button className={`btn ${props.edit ? "" : "add"}`} type="submit">{props.edit ? "Update" : "Add"}</button>
            </form>
        </div>
     );
}
 
export default TodoForm;