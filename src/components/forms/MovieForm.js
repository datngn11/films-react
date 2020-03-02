import React, { useState } from "react";
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

const MovieForm = ({ hideForm }) => {
  const [movies, setMovies] = useState(inititalData);
  const [errors, setErrors] = useState({});

  const handleStringChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.value });
  };

  const handleNumberChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: parseFloat(target.value) });
  };

  const handleCheckboxChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.checked });
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

    const errors = validateForm(movies);
    setErrors(errors);

    if (Object.keys(errors).length === 0) {
      console.log(movies);
      setMovies(inititalData);
    }
  };

  return (
    <div className="ui stackable grid">
      <form className="ui form">
        <div className="ui  grid">
          <div className="twelve wide column">
            <div className={errors.title ? "field error" : "field"}>
              <label>Film title</label>
              <input
                type="text"
                name="title"
                placeholder="Movie title"
                onChange={handleStringChange}
                value={movies.title}
              />
              <FormMessage>{errors.title}</FormMessage>
            </div>

            <div className={errors.description ? "field error" : "field"}>
              <label>Film description</label>
              <textarea
                name="description"
                placeholder="film description"
                onChange={handleStringChange}
                value={movies.description}
              />
              <FormMessage>{errors.description}</FormMessage>
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

          <div className="twelve wide column ">
            <div className={errors.img ? "field error" : "field"}>
              <label>Image</label>
              <input
                type="text"
                name="img"
                placeholder="img"
                value={movies.img}
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
                value={movies.director}
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
                value={movies.duration}
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
                value={movies.price}
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
          <a href="#" className="ui button" onClick={hideForm}>
            Hide form
          </a>
        </div>
      </form>
    </div>
  );
};

MovieForm.propTypes = {
  hideForm: PropTypes.func.isRequired
};

export default MovieForm;
