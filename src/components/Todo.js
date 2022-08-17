import { useState } from "react";

const Todo = ({todo , onComplete , onDelete , onEdit}) => {
        const [checked , setChecked] = useState(todo.isCompleted);
        return(
            
            <div className="todo">
                <div className={checked ? "completed" : ""}>
                    <label className="todoLabel">
                        <input onClick={onComplete} type="checkbox" onChange= {() => {setChecked(!checked)}} checked={checked}/>
                        <span className="indicator"/>
                        {todo.text}
                    </label>
                </div>
                <div>
                    <button onClick={onEdit} className="btn">Edit</button>
                    <button onClick={onDelete} className="btn delete">Delete</button>
                </div>
            </div>
        )
}
 
export default Todo;