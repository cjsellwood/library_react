import React from "react"
import classes from "./NewBook.module.css";

const newBook = (props) => {
  return (
    <div className={classes.NewBook}>
      <button onClick={props.showModal}>+</button>
    </div>
  );
}

export default newBook;