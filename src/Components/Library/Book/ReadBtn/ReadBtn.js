import React from "react";
import classes from "./ReadBtn.module.css";

const readBtn = (props) => {
  let attachedClasses = [classes.ReadBtn, classes.Read];
  if (!props.readStatus) {
    attachedClasses = [classes.ReadBtn, classes.NotRead];
  }

  return (
    <button className={attachedClasses.join(" ")}
    onClick={() => props.changeRead(props.id)}>
      {props.readStatus ? "Read" : "Not Read"}
    </button>
  );
};

export default readBtn;
