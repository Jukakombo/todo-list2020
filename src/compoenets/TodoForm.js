import React, { useState } from 'react'
import TodoList from './TodoList';

function TodoForm() {
    const [input, setInput]=useState("");
    const [todos, setTodos]=useState(["Reading", "cooking", "joking", "..."])
    const addTodo = (e)=>{
        e.preventDefault();
      setTodos([...todos,input]);
    }
    return (
        <div>
            <form >
            <input type="text " placeholder="Type Here" value={input} onChange={(e)=>setInput(e.target.value)}/>
            <button disabled={!input} onClick={addTodo} type="submit">Add Todo</button>
            </form>
<div className="todolist">
{todos.map((todo)=>(
<TodoList text={todo}/>
))}
    


</div>

        </div>
    )
}

export default TodoForm
