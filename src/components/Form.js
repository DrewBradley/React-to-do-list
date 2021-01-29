import React from "react"

class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      id: 0,
      item: "",
      completed: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      id: Date.now(),
      [name]: value 
      })
  }

  submit(event){
    event.preventDefault()
    this.props.updateList(this.state)
  }

  render() {
    return(
      <form onSubmit={this.submit} >
        <input 
          name="item"
          type="text" 
          placeholder="Add another task!" 
          value={this.state.item}
          onChange={this.handleChange} 
        /> 
        <button>Add</button>
      </form>
    )
  }
}

export default Form