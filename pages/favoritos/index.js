import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Nav from "../../components/Nav";
import Pages from "../../components/Pages";
import { useContext } from "react";
import { movieContext } from "../../context/peliculas/context";
import Grid from "../../components/MovieGrid";

export default function Favoritos() {
  const { favoriteMovies } = useContext(movieContext);

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Movie Shop</title>
          <link rel="icon" type="img/png" href="/favicon.png" />
          <link
            rel="preload"
            as="font"
            href="/fonts/DM-Serif-Display-Regular/DMSerifDisplay-Regular.ttf"
            crossOrigin
          />
          <link
            rel="preload"
            as="font"
            href="//db.onlinewebfonts.com/c/5474623336cd9df3cf26cdb25672f446?family=TipperaryeTextW01-Bold"
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <Nav />
        <h1>Tus pelis favoritas</h1>
        <main className={styles.main}>
          {favoriteMovies.length !== 0 ? (
            <Grid movies={favoriteMovies} />
          ) : (
            <p>
              Agregá tus películas favoritas desde Home y empezá a crear tu
              lista personalizada :)
            </p>
          )}
        </main>
        <footer className={styles.footer}>
          <Pages />
        </footer>
      </div>
      <style jsx>{`
        h1 {
          font-family: DMSerifDisplay-Regular;
        }
      `}</style>
    </>
  );
}
