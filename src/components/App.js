import React from "react"
import "../styles.css"
import "../components/ToDoItem"
import Form from "./Form"
import ToDoItem from "./ToDoItem"
import toDoData from "../todo-data"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      todos: toDoData
    }
    this.handleClick = this.handleClick.bind(this)
    this.updateList = this.updateList.bind(this)
  }

  handleClick(id) {
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

  updateList(item) {
    this.setState(prevState => {
      return prevState.todos.push(item)
    })
    console.log(this.state.todos)
  }

  render() {
    const toDoArray = this.state.todos.map(item => <ToDoItem key={item.id} item={item} handleClick={this.handleClick}/>)
    return(
      <div className="to-do">
        <h1>TO DO LIST</h1>
        {toDoArray}
        <Form updateList={this.updateList}/>
      </div>
    )
  }
}

export default App