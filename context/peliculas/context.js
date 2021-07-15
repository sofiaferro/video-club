import { createContext, useEffect, useReducer } from "react";
import moviesReducer from "./reducer";

//create context
export const movieContext = createContext();

//set type properties for actions
export const GET_MOVIES = "GET_MOVIES";
export const GET_USER_FAVORITE_MOVIES = "GET_USER_FAVORITE_MOVIES";
export const ADD_MOVIE_TO_FAVORITES = "ADD_MOVIE_TO_FAVORITES";
export const DELETE_MOVIE_FROM_FAVORITES = "DELETE_MOVIE_FROM_FAVORITES";

const MovieWrapper = ({ children }) => {
  const initialState = {
    movies: [],
    favoriteMovies: [],
  };
  //set initial state and reducer
  const [state, dispatch] = useReducer(moviesReducer, initialState);

  //get movies from api
  useEffect(() => {
    const getMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/discover/movie?api_key=66761884169de3ece2a4b0a237febcf3"
      ).then((res) => res.json());

      if (Object.keys(data).length !== 0) {
        dispatch({
          type: GET_MOVIES,
          payload: data.results,
        });
      }
    };
    getMovies();
  }, []);

  //add movie to favorites 
  function addMovieToFavorites(movie) {
    dispatch({ type: ADD_MOVIE_TO_FAVORITES, payload: movie });
  }

  //delete movie from favorites
  function deleteMovieFromFavorites(movie) {
    dispatch({ type: DELETE_MOVIE_FROM_FAVORITES, payload: movie });
  }

  //get user favorite movies from local storage
  useEffect(() => {
    function getUserFavoriteMovies() {
      const userFavMovies = localStorage.getItem("favoriteMovies");
      if (userFavMovies) {
        dispatch({
          type: GET_USER_FAVORITE_MOVIES,
          payload: JSON.parse(userFavMovies),
        });
      }
    }
    getUserFavoriteMovies();
  }, []);

  //listen for changes in local storage
  useEffect(() => {
    localStorage.setItem(
      "favoriteMovies",
      JSON.stringify(state.favoriteMovies)
    );
  });

  return (
    <movieContext.Provider
      value={{
        movies: state.movies,
        favoriteMovies: state.favoriteMovies,
        addMovieToFavorites,
        deleteMovieFromFavorites,
      }}
    >
      {children}
    </movieContext.Provider>
  );
};

export default MovieWrapper;
