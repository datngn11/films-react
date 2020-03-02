import React from "react";
import PropTypes from "prop-types";

function FallbackMessage({ children, icon, color }) {
  return (
    <div className={`ui icon ${color} message`}>
      <i className={`icon ${icon}`}></i>
      <div className="content">
        <h1 className="header">{children}</h1>
      </div>
    </div>
  );
}

FallbackMessage.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.string,
  color: PropTypes.string
};

FallbackMessage.defaultProps = {
  color: "orange",
  icon: "bell"
};

export default FallbackMessage;
