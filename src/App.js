import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import { ListGroup } from "react-bootstrap";
import TodoData from "./components/TodoData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: TodoData
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      return {
        todos: updatedTodos
      };
    });
  }

  render() {
    const todoItems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return (
      <div className="container">
        <ListGroup>
          <h1>My To-Do List</h1>
          {todoItems}
        </ListGroup>
      </div>
    );
  }
}

export default App;
