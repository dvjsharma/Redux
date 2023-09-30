import React from "react"
import TodoForm from "./components/todoform"
import Todos from "./components/todos"

function App() {


  return (
    <div className="h-screen bg-gray-900 flex flex-col text-center p-20">
      <TodoForm/>
      <Todos/>
    </div>
  )
}

export default App
