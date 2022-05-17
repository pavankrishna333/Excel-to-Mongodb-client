import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Message = ({ msg, msgStatus }) => {
  if (msgStatus === "success") {
    return (
      <Fragment>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          {msg}
        </div>
      </Fragment>
    );
  } else if (msgStatus === "failure") {
    return (
      <Fragment>
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          {msg}
        </div>
      </Fragment>
    );
  }
};

Message.propTypes = {
  msg: PropTypes.string.isRequired,
  msgStatus: PropTypes.string.isRequired,
};

export default Message;
