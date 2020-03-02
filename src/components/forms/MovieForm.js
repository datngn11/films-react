import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import FormMessage from "../messages/FormMessage";

const inititalData = {
  title: "",
  director: "",
  duration: "",
  price: "",
  img: "",
  featured: false,
  description: ""
};

const MovieForm = ({ hideForm, saveMovie, selectedMovie }) => {
  const [movie, setMovie] = useState(inititalData);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedMovie._id) {
      setMovie(selectedMovie);
    }
    if (!selectedMovie._id && movie._id !== null) {
      setMovie(inititalData);
    }
  }, [selectedMovie]);

  const handleStringChange = ({ target }) => {
    setMovie({ ...movie, [target.name]: target.value });
  };

  const handleNumberChange = ({ target }) => {
    setMovie({ ...movie, [target.name]: parseFloat(target.value) });
  };

  const handleCheckboxChange = ({ target }) => {
    setMovie({ ...movie, [target.name]: target.checked });
  };

  const validateForm = data => {
    const errors = {};

    if (!data.title) {
      errors.title = "Title cannot be blank";
    }
    if (!data.description) errors.description = "Description cannot be blank";
    if (!data.duration) errors.duration = "Duration field cannot be blank";
    if (!data.director) errors.director = "Director field cannot be blank";
    if (!data.price) errors.price = "Price field cannot be blank ";
    if (!data.img) errors.img = "Img field cannot be blank";

    if (parseInt(data.duration) < 0) errors.duration = "Duration cannot be negative";
    if (parseFloat(data.price) < 0) errors.price = "Price cannot be negative";

    return errors;
  };

  const handleSubmit = e => {
    e.preventDefault();

    const errors = validateForm(movie);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      saveMovie(movie);
      setMovie(inititalData);
    }
  };

  return (
    <div className="ui stackable grid">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="ui  grid">
          <div className="twelve wide column">
            <div className={errors.title ? "field error" : "field"}>
              <label>Film title</label>
              <input
                type="text"
                name="title"
                placeholder="Movie title"
                onChange={handleStringChange}
                value={movie.title}
              />
              <FormMessage>{errors.title}</FormMessage>
            </div>

            <div className={errors.description ? "field error" : "field"}>
              <label>Film description</label>
              <textarea
                name="description"
                placeholder="film description"
                onChange={handleStringChange}
                value={movie.description}
              />
              <FormMessage>{errors.description}</FormMessage>
            </div>
          </div>

          <div className="four wide column">
            <ReactImageFallback
              src={movie.img}
              fallbackImage="http://via.placeholder.com/250x250"
              initialImage="http://via.placeholder.com/250x250"
              alt={movie.title}
              className="ui image"
            />
          </div>

          <div className="twelve wide column ">
            <div className={errors.img ? "field error" : "field"}>
              <label>Image</label>
              <input
                type="text"
                name="img"
                placeholder="img"
                value={movie.img}
                onChange={handleStringChange}
              />
              <FormMessage>{errors.img}</FormMessage>
            </div>
          </div>

          <div className="six wide column">
            <div className={errors.director ? "field error" : "field"}>
              <label>Director</label>
              <input
                type="text"
                name="director"
                placeholder="film director"
                onChange={handleStringChange}
                value={movie.director}
              />
              <FormMessage>{errors.director}</FormMessage>
            </div>
          </div>

          <div className="six wide column">
            <div className={errors.duration ? "field error" : "field"}>
              <label>Duration</label>
              <input
                type="number"
                name="duration"
                placeholder="Duration"
                onChange={handleNumberChange}
                value={movie.duration}
              />
              <FormMessage>{errors.duration}</FormMessage>
            </div>
          </div>

          <div className="six wide column">
            <div className={errors.price ? "field error" : "field"}>
              <label>Price</label>
              <input
                type="number"
                name="price"
                placeholder="price"
                onChange={handleNumberChange}
                value={movie.price}
              />
              <FormMessage>{errors.price}</FormMessage>
            </div>
          </div>

          <div className="six wide column inline field">
            <label htmlFor="featured">Featured</label>
            <input
              type="checkbox"
              name="featured"
              id="featured"
              checked={movie.featured}
              value={movie.featured}
              onChange={handleCheckboxChange}
            />
          </div>
        </div>

        <div className="ui fluid buttons">
          <button className="ui button primary" type="submit">
            Save
          </button>
          <div className="or"></div>
          <a href="#" className="ui button" onClick={hideForm}>
            Hide form
          </a>
        </div>
      </form>
    </div>
  );
};

MovieForm.propTypes = {
  hideForm: PropTypes.func.isRequired,
  saveMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.object
};

export default MovieForm;
