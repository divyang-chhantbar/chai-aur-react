import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id : 1 , text:"hello Divyang" , completed:false}]
}

// creating Slice (bigger version of reducer)
// Reducer : Functionality (set of instructions to perform task)

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action)=> {
            const todo = {
                id : nanoid() , 
                text:action.payload ,//payload is an object and can extract anything you want to !
                completed : action.payload.completed
            }
            // in order to update the state we use push method
            state.todos.push(todo)
        },
        // state : it will have the access of initialState and will help to update it
        // actions : it will send the value in order to do the functions or to trugger state change
        removeTodo : (state,action)=> {
            state.todos = state.todos.filter((todo)=> todo.id != action.payload )
        },

        updateTodo : (state,action) => {
           state.todos = state.todos.map ((todo)=>todo.id===action.payload.id ? {...todo,text : action.payload.text }:todo )
        },

        toggleTodo : (state,action) => {
            state.todos = state.todos.map ((todo)=>todo.id===action.payload.id ?{...todo,completed:!action.payload.completed}:todo)
        }
    }
})

/* syntax to export todoSlice 
1) export all the functionality
2) see the store you have created earlier have to give some value in it as it will not take value from anywhere and only update which is refrenced !
*/
export const {addTodo,removeTodo,updateTodo,toggleTodo} = todoSlice.actions
export default todoSlice.reducer