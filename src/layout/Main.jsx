import { Component } from "react";
import { Movies } from "../components/Movies";
import { Search } from "../components/Search";
import { Preloader } from "../components/Preloader";

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      type: "all",
    };
  }

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=42956407&s=spider-man`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  searchMovies = (value, type = "all") => {
    fetch(
      `http://www.omdbapi.com/?apikey=42956407&s=${value}&type=${
        type === "all" ? "" : `${type}`
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;
    return (
      <>
        <main className="container content">
          <Search searchMovies={this.searchMovies} />
          {movies.length ? <Movies movies={movies} /> : <Preloader />}
        </main>
      </>
    );
  }
}
