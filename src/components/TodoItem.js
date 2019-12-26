import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoItem = props => {
  const unchecked = "list-group-item list-group-item-info";
  const checked = "list-group-item list-group-item-secondary";

  return (
    <ListGroup.Item>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p className={props.item.completed ? checked : unchecked}>
        {props.item.task}
      </p>
    </ListGroup.Item>
  );
};

export default TodoItem;
