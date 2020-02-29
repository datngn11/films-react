import React from "react";
import PropTypes from "prop-types";

function Message({ children, icon, color }) {
  return (
    <div className={`ui icon ${color} message`}>
      <i className={`icon ${icon}`}></i>
      <div className="content">
        <h1 className="header">{children}</h1>
      </div>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string
};

Message.defaultProps = {
  color: "orange",
  icon: "bell"
};

export default Message;
