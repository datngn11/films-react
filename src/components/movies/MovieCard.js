import React, { useState, memo } from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cls = isOpen ? "slash" : "";

  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="ui column card">
      {isOpen ? (
        <div className="content">
          <p>{movie.description}</p>
        </div>
      ) : (
        <div className="image">
          <Featured featured={movie.featured} id={movie._id} />
          <span className="ui green label ribbon">$ {movie.price} mil</span>
          <img src={movie.img} alt={movie.title} />
        </div>
      )}

      <div className="content">
        <a href="#" className="header">
          {movie.title}
        </a>
        <div className="meta">
          <i className="icon users">{movie.director}</i>
          <span className="right floated">
            <span>{movie.duration}</span>
            <i className="icon wait right"></i>
          </span>
        </div>
      </div>
      <div className="content">
        <i className={`icon eye ${cls} link`} onClick={toggleDescription}></i>
      </div>
      <div className="extra content">
        <div className="ui two buttons">
          <span className="ui red basic button">
            <i className="ui icon check">YES</i>
          </span>
          <span className="ui grey basic button">
            <i className="ui icon close">NO</i>
          </span>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string,
    featured: PropTypes.bool.isRequired
  }).isRequired
};

export default memo(MovieCard);
