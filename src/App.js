import React, {component, Component} from 'react';

class TodoList extends Component {
  constructor () {
    super ();
    this.state = {
      // create variables here.
      todos: [],
      currentTodo: "",
    }
};
// this is where our methods will go

handleChange = (event) => {
  console.log(event.target.value);
}

addItem = (event) => {
  event.preventDefault();
  console.log ("the add item method excuted");
}

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addItem}>
          <label htmlFor="taskName">Task Name:</label>
          <input onChange={this.handleChange} name="taskName" placeholder="Place Your ToDo Here"/>
          <button type="submit">Add Task</button>
        </form>
      </div>
    );
  }
}

export default TodoList;