import React from "react";
import Aux from "../../../hoc/Aux/Aux";
import Backdrop from "../../UI/Backdrop/Backdrop";
import BookForm from "../../Library/BookForm/BookForm";

const modal = (props) => {
  // Show form modal based on whether state showModal is true
  return props.show ? (
    <Aux>
      <Backdrop hideModal={props.hideModal} />
      <BookForm
        hideModal={props.hideModal}
        submitForm={props.submitForm}
        changed={props.changed}
      />
    </Aux>
  ) : null;
};

export default modal;
