import { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { movieContext } from "../context/peliculas/context";
import FavoriteBorderTwoToneIcon from "@material-ui/icons/FavoriteBorderTwoTone";

export default function FavIcon({ movie }) {
  //get context
  const {
    favoriteMovies,
    addMovieToFavorites,
    deleteMovieFromFavorites,
  } = useContext(movieContext);

  //state variables for path and favorite movies styling
  const [path, setPath] = useState("");
  const [fav, setFav] = useState(false);

  //set path
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  //set favorites
  useEffect(() => {
    const userFavMovies = JSON.parse(localStorage.getItem("favoriteMovies"));
    const isFavorite = userFavMovies.find( item => item.title === movie.title );
    isFavorite? setFav(true) : setFav(false);
  }, [])

  //styles to overwrite material-ui fav icon
  const useStyles = makeStyles({
    favIconEnabled: {
      backgroundColor: "#00CC7C",
      position: "absolute",
      width: "3em",
      borderRadius: "14px",
      display: "flex",
      justifyContent: "center",
      height: "3em",
      right: 0,
      alignItems: "center",
      margin: "5px",
      color: "#fff",
      top: 0,
    },
    favIconDisabled: {
      backgroundColor: "#EFEFEF",
      position: "absolute",
      width: "3em",
      borderRadius: "14px",
      display: "flex",
      justifyContent: "center",
      height: "3em",
      right: 0,
      alignItems: "center",
      margin: "5px",
      color: "#B7BDC4",
      top: 0,
    },
  });
  const classes = useStyles();
  
  //handle add to favorites/delete from favorites
  const isHome = path === "/" || path === "/peliculas" ? true : false;
  const isFavorite = favoriteMovies.find( item => item.title === movie.title );
  function handleFav() {
    if (isHome && !isFavorite) {
      setFav(true);
      addMovieToFavorites(movie);
    } else if (!isHome && isFavorite) {
      setFav(false);
      deleteMovieFromFavorites(movie);
    }
  }

  return (
    <div
      className={fav || isFavorite ? classes.favIconEnabled : classes.favIconDisabled}
      disabled={fav}
      onClick={() => handleFav()}
    >
      <FavoriteBorderTwoToneIcon />
    </div>
  );
}
