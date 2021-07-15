import Head from "next/head";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Pages from "../components/Pages";
import MovieGrid from "../components/MovieGrid";
import { useContext } from "react";
import { movieContext } from "../context/peliculas/context";

export default function Home() {
  const { movies } = useContext(movieContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Shop</title>
        <link rel="icon" type="img/png" href="/favicon.png" />
        <link
          rel="preload"
          as="font"
          href="/fonts/DM-Serif-Display-Regular/DMSerifDisplay-Regular.ttf"
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
      <Banner />
      <main className={styles.main}>
        <MovieGrid movies={movies} />
      </main>
      <footer className={styles.footer}>
        <Pages />
      </footer>
    </div>
  );
}
