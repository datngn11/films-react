import React from "react";
import MovieCard from "./MovieCard";
import PropTypes from "prop-types";

function MovieList({ movies }) {
  return (
    <div className="ui three cards">
      {movies.map(movie => (
        <MovieCard movie={movie} key={movie._id} />
      ))}
    </div>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired
};

MovieList.defaultProps = {
  movies: []
};

export default MovieList;
