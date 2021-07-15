import { Grid } from "@material-ui/core";
import Movie from "./Movie";

export default function MovieGrid({movies}) {

  return (
    <>
      <div>
        <Grid id="movies" container spacing={2}>
          {movies.length !== 0
            ? movies.map((movie, index) => (
                <Grid key={index} item xs={12} sm={4} md={3}>
                  <Movie
                    movie={movie}
                    title={movie.original_title}
                    summary={movie.overview}
                    poster={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                    thumbnail={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
      <style jsx>{`
        div {
          width: 90%;
        }
      `}</style>
    </>
  );
}
