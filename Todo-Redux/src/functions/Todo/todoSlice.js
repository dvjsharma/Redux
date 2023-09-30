import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    // todos: [{id: nanoid(), text: "keep grinding"}]
    todos: []
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action)=>{
            const new_todo={
                id: nanoid(), //not a param 
                text: action.payload //getting from param
            }
            state.todos.push(new_todo)
        },
        deleteTodo: (state, action)=>{
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload ) //just accessing id via param
        },
        updateTodo: (state, action)=>{
            state.todos = state.todos.map((todo) =>{
                if(todo.id===action.payload.id){
                    return {...todo, text: action.payload.text}
                }
                else{
                    return todo
                }
            })
        },
        toggleTodo: (state, action)=>{
            state.todos = state.todos.map((todo) =>{
                if(todo.id===action.payload.id){
                    return {...todo, ischecked: !todo.ischecked}
                }
                else{
                    return todo
                }
            })
        }
    }
})

export const {addTodo, deleteTodo, updateTodo, toggleTodo} =todoSlice.actions
export default todoSlice.reducer