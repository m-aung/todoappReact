import React, {component, Component} from 'react';
import TodoItems from './TodoItems';
import "./TodoList.css";

class TodoList extends Component {
  constructor (pros) {
    super (pros);
    this.state = {
      // create variables here.
      items: [],
    };
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
// this is where our methods will go

  handleChange = (event) => {
  console.log(event.target.value);
  }

  addItem = (event) => {
    // type argument to blank
    if (this._inputElement.value !== "" && this._inputElement.value.length <= 45) {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };
      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
      this._inputElement.value="";
    }
    else if (this._inputElement.value =="") {
      alert("Please Add New task");
    }
    else {
      alert("More than allowed characters");
      this._inputElement.value="";
    }
    console.log(this.state.items);
    event.preventDefault(); // preventing auto-refreshing 
  }
    deleteItem(key) {
      var filteredItems = this.state.items.filter(function(item){
        return (item.key !== key);
      });
      this.setState({
        items: filteredItems
      });
    }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <h1>My To Do List</h1>
          <form onSubmit={this.addItem}>
            <label htmlFor="taskName">Task Name:</label>
            <input 
              ref={(a) => this._inputElement = a} 
              placeholder="Enter Task"
            />
            <button type="submit">Add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/> 
      </div>
    );
  }
}

export default TodoList;