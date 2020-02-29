import React from "react";
import PropTypes from "prop-types";

const MovieForm = () => {
  return (
    <div className="ui container">
      <div className="ui secondary pointing menu">
        <a href="/" className="item">
          Home
        </a>
        <span className="item">
          <i className="icon plus"></i>
          Add new movie
        </span>
      </div>

      <div className="ui stackable grid">
        <form className="ui form">
          <div className="ui  grid">
            <div className="twelve wide column">
              <div className="field error">
                <label>Film title</label>
                <input type="text" name="title" id="name" placeholder="film title" />
                <div style="color: #9a3f38">title error</div>
              </div>

              <div className="field">
                <label>Film description</label>
                <textarea
                  name="description"
                  id="description"
                  placeholder="film description"
                ></textarea>
              </div>
            </div>

            <div className="four wide column">
              <img
                src="http://via.placeholder.com/250x250"
                alt="New Film Poster"
                className="ui image"
              />
            </div>

            <div className="twelve wide column field">
              <label>Image</label>
              <input type="text" name="img" id="img" placeholder="img" />
            </div>

            <div className="six wide column">
              <div className="field">
                <label>Director</label>
                <input type="text" name="director" id="director" placeholder="film director" />
              </div>
            </div>

            <div className="six wide column">
              <div className="field">
                <label>Duration</label>
                <input type="number" name="duration" id="duration" placeholder="Duration" />
              </div>
            </div>

            <div className="six wide column">
              <div className="field">
                <label>Price</label>
                <input type="number" name="price" id="price" placeholder="price" />
              </div>
            </div>

            <div className="six wide column inline field">
              <label for="featured">Featured</label>
              <input type="checkbox" name="featured" id="featured" />
            </div>
          </div>

          <div className="ui fluid buttons">
            <button className="ui button primary" type="submit">
              Save
            </button>
            <div className="or"></div>
            <a href="#" className="ui button">
              Hide form
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

MovieForm.propTypes = {};

export default MovieForm;
