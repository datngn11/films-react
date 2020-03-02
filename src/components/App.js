import React, { useState, useEffect } from "react";
import { films as data } from "../data";
import _orderBy from "lodash/orderBy";
import FallbackMessage from "./messages/FallbackMessage";
import MovieList from "./movies/MovieList";
import MovieForm from "./forms/MovieForm";
import TopNavigation from "./nav/TopNavigation";
import { generate } from "shortid";
import { MovieContext } from "./context/Context";

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState({});

  const cols = showAddForm ? "ten" : "sixteen";

  useEffect(() => {
    setMovies(sortMovies(data, ["featured", "title"], ["desc", "asc"]));
  }, [data]);

  const sortMovies = movies => _orderBy(movies, ["featured", "title"], ["desc", "asc"]);

  const toggleFeatured = id => e =>
    setMovies(
      sortMovies(
        movies.map(movie => (movie._id === id ? { ...movie, featured: !movie.featured } : movie))
      )
    );

  const showForm = () => {
    setShowAddForm(true);
    setSelectedMovie({});
  };
  const hideForm = () => {
    setShowAddForm(false);
    setSelectedMovie({});
  };

  const selectMovieForEdit = movie => () => {
    setSelectedMovie(movie);
    setShowAddForm(true);
  };

  const addMovie = movie => {
    setMovies(sortMovies([...movies, { ...movie, _id: generate() }]));
    hideForm();
  };

  const updateMovie = movie => {
    console.log("====update");
    console.log(movie);
    setMovies(sortMovies(movies.map(m => (m._id === movie._id ? movie : m))));
    hideForm();
    console.log(movies);
  };

  const saveMovie = movie => (movie._id ? updateMovie(movie) : addMovie(movie));

  const removeMovie = id => setMovies(movies.filter(m => m._id !== id));

  return (
    <div className="ui container">
      {movies.length > 0 ? (
        <MovieContext.Provider value={{ toggleFeatured, selectMovieForEdit, removeMovie }}>
          <TopNavigation showForm={showForm} />
          <div className="ui stackable grid">
            {showAddForm && (
              <div className="six wide column">
                <MovieForm
                  hideForm={hideForm}
                  saveMovie={saveMovie}
                  selectedMovie={selectedMovie}
                />
              </div>
            )}
            <div className={`${cols} wide column`}>
              <MovieList movies={movies} />
            </div>
          </div>
        </MovieContext.Provider>
      ) : (
        <FallbackMessage icon={"bell"} color={"olive"}>
          There is no data yet
        </FallbackMessage>
      )}
    </div>
  );
}

export default App;
