"use client"
import {FormEvent, useState} from "react";

const AddTodo = () => {
    const [todo, setTodo] = useState()
    const handleFormSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo()
    }
    return (
        <main>
            <form onSubmit={handleFormSubmit}>
                <input type ="text" placeholder="write your todo" value={todo} onChange={(event)=>setTodo(event.target.value)}/>
                <button type="submit">Add</button>
            </form>
        </main>
    )
}

export default AddTodo;