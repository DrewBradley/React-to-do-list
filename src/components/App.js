import React from "react"
import "../styles.css"
import "../components/ToDoItem"
import ToDoItem from "./ToDoItem"

function App() {
  return(
    <div className="to-do">
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default App