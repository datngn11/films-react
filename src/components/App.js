import React, { useState, useEffect, createContext } from "react";
import { films as data } from "../data";
import _orderBy from "lodash/orderBy";
import FallbackMessage from "./messages/FallbackMessage";
import MovieList from "./movies/MovieList";
import MovieForm from "./forms/MovieForm";
import TopNavigation from "./nav/TopNavigation";
import { generate } from "shortid";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

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

  const showForm = () => setShowAddForm(true);
  const hideForm = () => setShowAddForm(false);

  const saveMovie = movie => {
    setMovies(sortMovies([...movies, { ...movie, _id: generate() }]));
    setShowAddForm(false);
  };

  return (
    <div className="ui container">
      {movies.length > 0 ? (
        <AppContext.Provider value={{ toggleFeatured }}>
          <TopNavigation showForm={showForm} />
          <div className="ui stackable grid">
            {showAddForm && (
              <div className="six wide column">
                <MovieForm hideForm={hideForm} saveMovie={saveMovie} />
              </div>
            )}
            <div className={`${cols} wide column`}>
              <MovieList movies={movies} />
            </div>
          </div>
        </AppContext.Provider>
      ) : (
        <FallbackMessage icon={"bell"} color={"olive"}>
          There is no data yet
        </FallbackMessage>
      )}
    </div>
  );
}

export default App;
