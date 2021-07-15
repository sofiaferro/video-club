import "../styles/globals.css";
import MovieWrapper from "../context/peliculas/context";

function MyApp({ Component, pageProps }) {
  return (
    <MovieWrapper>
      <Component {...pageProps} />
    </MovieWrapper>
  );
}

export default MyApp;
