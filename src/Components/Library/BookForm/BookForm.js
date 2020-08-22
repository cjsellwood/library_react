import React from "react";
import classes from "./BookForm.module.css";

const bookForm = (props) => {
  return (
    <div className={classes.BookForm}>
      <form>
        <label>Title</label>
        <input type="text" id="title" name="title" />
        <label >Author</label>
        <input type="text" id="author" name="author" />
        <label>Pages</label>
        <input type="number" id="pages" name="pages" />
        <label>Status</label><br/>
        <input type="radio" id="read" name="status"/>
        <label className={classes.RadioLabel}>Read</label><br/>
        <input type="radio" id="not-read" name="status"/>
        <label className={classes.RadioLabel}>Not Read</label>
      </form>
      <button className={classes.Submit}>
        Submit
      </button>
      <button className={classes.Cancel} onClick={props.hideModal}>
        Cancel
      </button>
    </div>
  );
};

export default bookForm;
