import React, { useState, memo, useContext } from "react";
import PropTypes from "prop-types";
import Featured from "./Featured";
import { MovieContext } from "../context/Context";

const MovieCard = ({ movie }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cls = isOpen ? "slash" : "";
  const toggleDescription = () => {
    setIsOpen(!isOpen);
  };

  const [dialogOn, setDialogOn] = useState(false);

  const showConfirmDialog = () => {
    setDialogOn(true);
  };
  const hideConfirmDialog = () => {
    setDialogOn(false);
  };

  const { selectMovieForEdit, removeMovie } = useContext(MovieContext);
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
        {!dialogOn ? (
          <div className="ui two buttons">
            <span className="ui green basic button" onClick={selectMovieForEdit(movie)}>
              <i className="ui icon edit"></i>
            </span>
            <span className="ui red basic button" onClick={showConfirmDialog}>
              <i className="ui icon trash"></i>
            </span>
          </div>
        ) : (
          <div className="ui two buttons">
            <span className="ui green basic button" onClick={removeMovie(movie._id)}>
              <i className="ui icon check" /> YES
            </span>
            <span className="ui red basic button" onClick={hideConfirmDialog}>
              <i className="ui icon close" /> NO
            </span>
          </div>
        )}
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
