import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoItem = props => {
  const completedStyles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  };

  return (
    <ListGroup.Item>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <p style={props.item.completed ? completedStyles : null}>
        {props.item.task}
      </p>
    </ListGroup.Item>
  );
};

export default TodoItem;
