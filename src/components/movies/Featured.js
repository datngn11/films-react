import React, { useContext } from "react";
import PropTypes from "prop-types";
import { AppContext } from "../App";

function Featured({ featured, id }) {
  const { toggleFeatured } = useContext(AppContext);
  const cls = featured ? "yellow" : "empty";

  return (
    <div>
      <span className="ui right corner label" onClick={toggleFeatured(id)}>
        <i className={`star icon ${cls}`}></i>
      </span>
    </div>
  );
}

Featured.propTypes = {
  featured: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired
};
export default Featured;
