import React, { useState, useEffect, createContext } from "react";
import { films as data } from "../data";
import _orderBy from "lodash/orderBy";
import Message from "./messages/Message";
import MovieList from "./movies/MovieList";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);

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

  return (
    <div className="ui container">
      {movies.length > 0 ? (
        <AppContext.Provider value={{ toggleFeatured }}>
          <MovieList movies={movies} />
        </AppContext.Provider>
      ) : (
        <Message icon={"bell"} color={"olive"}>
          There is no data yet
        </Message>
      )}
    </div>
  );
}

export default App;
