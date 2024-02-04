{/* In contextApi we declare like this , and we can create a different methods or can create an Array after creating we will create a method and will not give any functionality instead we give functionality in the main or App.jsx file . */}
import { useContext } from "react";
import { createContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id:1,
            todo : "message",
            completed : false,
        }
    ],
    addTodo : (todo) => {},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) => {},
    toggleCompleted : (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider