import React from "react";
import classes from "./Book.module.css";
import ReadBtn from "./ReadBtn/ReadBtn";
import DeleteBtn from "./DeleteBtn/DeleteBtn";

const book = (props) => {
  return (
    <div className={classes.Book}>
      <div>{props.title}</div>
      <div>{props.author}</div>
      <div>Pages: {props.pages}</div>
      <div>
        <ReadBtn changeRead={props.changeRead} id={props.id} readStatus={props.readStatus}/>
        <DeleteBtn />
      </div>
    </div>
  );
};

export default book;
