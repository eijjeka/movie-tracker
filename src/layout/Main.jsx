import { useState, useEffect } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_APP_API_KEY;

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchMovies = (value, type = "all") => {
    setLoading(true);
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${value}&type=${
        type === "all" ? "" : `${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  };

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=spider-man`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, []);

  return (
    <>
      <main className="container content">
        <Search searchMovies={searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    </>
  );
};
