import {createContext, ReactNode, useState} from "react";

export const todosContext = createContext(null)

export  const TodosProvider = (
    children:{children:ReactNode}) => {

    const [todos, setTodos] = useState();
    const handleAddTodo = (task:string) => {
        setTodos(value:(prev)) => {
          const newTodos = {
            id: Math.random().toString(),
            task, 
            completed:false,
            createdAt: new Date() 
          }  
              ...prev 
        }
    }
    return newTodos;
}