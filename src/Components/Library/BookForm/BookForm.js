import React from "react";
import classes from "./BookForm.module.css";

const bookForm = (props) => {
  return (
    <div className={classes.BookForm}>
      <form onSubmit={props.submitForm}>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(event) => props.changed(event)}
        />
        <label>Author</label>
        <input
          type="text"
          name="author"
          onChange={(event) => props.changed(event)}
        />
        <label>Pages</label>
        <input
          type="number"
          name="pages"
          onChange={(event) => props.changed(event)}
        />
        <label>Status</label>
        <br />
        <input
          type="radio"
          name="readStatus"
          value={true}
          onChange={(event) => props.changed(event)}
        />
        <label className={classes.RadioLabel}>Read</label>
        <br />
        <input
          type="radio"
          name="readStatus"
          value={false}
          onChange={(event) => props.changed(event)}
        />
        <label className={classes.RadioLabel}>Not Read</label>
        <br />
        <button type="submit" className={classes.Submit}>
          Submit
        </button>
        <button
          type="button"
          className={classes.Cancel}
          onClick={props.hideModal}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default bookForm;
