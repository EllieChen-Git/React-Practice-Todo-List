import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoItem = () => {
  return (
    <ListGroup.Item variant="info">
      <input type="checkbox" />
      <p>To do 1</p>
    </ListGroup.Item>
  );
};

export default TodoItem;
