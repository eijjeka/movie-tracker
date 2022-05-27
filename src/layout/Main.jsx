import { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

const API_KEY = process.env.REACT_MOVIE_APP_API_KEY;

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=42956407&s=spider-man`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (value, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=42956407&s=${value}&type=${
        type === "all" ? "" : `${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };

  render() {
    const { movies, loading } = this.state;
    return (
      <>
        <main className="container content">
          <Search searchMovies={this.searchMovies} />
          {loading ? <Preloader /> : <Movies movies={movies} />}
        </main>
      </>
    );
  }
}