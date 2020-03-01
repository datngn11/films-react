import React, { useState } from "react";
import ReactImageFallback from "react-image-fallback";
const inititalData = {
  title: "",
  director: "",
  duration: "",
  price: "",
  img: "",
  featured: false,
  description: ""
};

const MovieForm = ({ tagsList, genresList }) => {
  const [movies, setMovies] = useState(inititalData);

  const handleStringChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.value });
  };

  const handleNumberChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: parseFloat(target.value) });
  };

  const handleCheckboxChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.checked });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movies);
  };

  return (
    <div className="ui stackable grid">
      <form className="ui form">
        <div className="ui  grid">
          <div className="twelve wide column">
            <div className="field error">
              <label>Film title</label>
              <input
                type="text"
                name="title"
                placeholder="Movie title"
                onChange={handleStringChange}
                value={movies.title}
              />
              <div style={{ color: "#9a3f38" }}>title error</div>
            </div>

            <div className="field">
              <label>Film description</label>
              <textarea
                name="description"
                placeholder="film description"
                onChange={handleStringChange}
                value={movies.description}
              ></textarea>
            </div>
          </div>

          <div className="four wide column">
            <ReactImageFallback
              src={movies.img}
              fallbackImage="http://via.placeholder.com/250x250"
              initialImage="http://via.placeholder.com/250x250"
              alt={movies.title}
              className="ui image"
            />
          </div>

          <div className="twelve wide column field">
            <label>Image</label>
            <input
              type="text"
              name="img"
              placeholder="img"
              value={movies.img}
              onChange={handleStringChange}
            />
          </div>

          <div className="six wide column">
            <div className="field">
              <label>Director</label>
              <input
                type="text"
                name="director"
                placeholder="film director"
                onChange={handleStringChange}
                value={movies.director}
              />
            </div>
          </div>

          <div className="six wide column">
            <div className="field">
              <label>Duration</label>
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                onChange={handleNumberChange}
                value={movies.duration}
              />
            </div>
          </div>

          <div className="six wide column">
            <div className="field">
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="price"
                onChange={handleNumberChange}
                value={movies.price}
              />
            </div>
          </div>

          <div className="six wide column inline field">
            <label htmlFor="featured">Featured</label>
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={movies.featured}
              value={movies.featured}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <div className="ui fluid buttons">
          <button className="ui button primary" type="submit" onClick={handleSubmit}>
            Save
          </button>
          <div className="or"></div>
          <a href="#" className="ui button">
            Hide form
          </a>
        </div>
      </form>
    </div>
  );
};

export default MovieForm;
