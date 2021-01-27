import React from "react"
import "../styles.css"
import "../components/ToDoItem"
import ToDoItem from "./ToDoItem"
import toDoData from "../todo-data"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDoData
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(id) {
    console.log("THIS IS IT", id)
    this.setState(prevState => {
      const newToDos = prevState.todos.map(todo => {
        if(todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {todos: newToDos}
    })
  }

  render() {
    const toDoArray = this.state.todos.map(item => <ToDoItem id={item.id} item={item} handleClick={this.handleClick}/>)
    return(
      <div className="to-do">
        <h1>TO DO LIST</h1>
        {toDoArray}
      </div>
    )
  }
}

export default App