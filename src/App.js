import React from "react";
import TodoItem from "./components/TodoItem";
import { ListGroup } from "react-bootstrap";

const App = () => {
  return (
    <div className="container">
      <ListGroup>
        <h1>My To-Do List</h1>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </ListGroup>
    </div>
  );
};

export default App;
