import React from "react";
import classes from "./DeleteBtn.module.css";

// Component for delete button on each book
const deleteBtn = (props) => {
  return (
    <button
      className={classes.DeleteBtn}
      onClick={() => props.deleteBook(props.id)}
    >
      Delete
    </button>
  );
};

export default deleteBtn;
