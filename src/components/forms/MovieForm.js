import React, { useState } from "react";

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
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [genre, setGenre] = useState("");
  const [multiTags, setMultiTags] = useState([]);

  const handleStringChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.value });
  };

  const handleNumberChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: parseFloat(target.value) });
  };

  const handleCheckboxChange = ({ target }) => {
    setMovies({ ...movies, [target.name]: target.checked });
  };

  const handleTags = id => e => {
    setSelectedTags(selectedTags =>
      selectedTags.includes(id) ? selectedTags.filter(t => t !== id) : [...selectedTags, id]
    );
  };

  const handleGenre = id => e => {
    setSelectedGenre(id);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(movies);
  };

  const handleSelect = ({ target }) => {
    setGenre(target.value);
  };

  const handleMultiSelect = ({ target }) => {
    const multiSelect = [...target.selectedOptions].map(o => o.value);
    console.log(target.selectedOptions);
    setMultiTags(multiSelect);
  };

  return (
    <div className="ui stackable grid">
      <div className="ui grid">
        <div className="four wide column">
          <div className="grouped fields">
            <label>Tags</label>
            {tagsList.map(tag => (
              <div className="field" key={tag._id}>
                <div className="ui checkbox">
                  <input
                    type="checkbox"
                    id={tag._id}
                    onChange={handleTags(tag._id)}
                    checked={selectedTags.includes(tag._id)}
                  />
                  <label htmlFor={tag._id}>{tag.title}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="four wide column">
          <div className="grouped fields">
            <label>Genres</label>
            {genresList.map(genre => (
              <div className="field" key={genre._id}>
                <div className="ui radio checkbox">
                  <input
                    type="radio"
                    name="example2"
                    id={`genre${genre._id}`}
                    onChange={handleGenre(genre._id)}
                    checked={selectedGenre === genre._id}
                  />
                  <label htmlFor={`genre ${genre._id}`}>{genre.title}</label>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="four wide column">
          <select className="ui dropdown" onChange={handleSelect} value={genre}>
            {genresList.map(genre => (
              <option value={genre._id} key={genre._id}>
                {genre.title}
              </option>
            ))}
          </select>
        </div>

        <div className="four wide column">
          <select multiple size={tagsList.length} value={multiTags} onChange={handleMultiSelect}>
            {tagsList.map(tag => (
              <option value={tag._id} key={tag._id}>
                {tag.title}
              </option>
            ))}
          </select>
        </div>
      </div>

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
            <img
              src="http://via.placeholder.com/250x250"
              alt="New Film Poster"
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
