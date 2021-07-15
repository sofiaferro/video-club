import { GET_MOVIES, GET_USER_FAVORITE_MOVIES, ADD_MOVIE_TO_FAVORITES, DELETE_MOVIE_FROM_FAVORITES } from "./context";

const moviesReducer = (state, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return { ...state, movies: action.payload };
    case GET_USER_FAVORITE_MOVIES:
      return { ...state, favoriteMovies: action.payload };
    case ADD_MOVIE_TO_FAVORITES:
      const isFavorite = state.favoriteMovies.includes(action.payload)
      if (!isFavorite) {
        return { ...state, favoriteMovies: [...state.favoriteMovies, action.payload]};
      }
    case DELETE_MOVIE_FROM_FAVORITES:
        const filteredMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
        return {...state, favoriteMovies: filteredMovies}
    default:
      return state;
  }
};

export default moviesReducer;
