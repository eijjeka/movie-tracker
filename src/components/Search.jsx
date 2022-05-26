import React, { Component } from "react";

export class Search extends Component {
  state = {
    search: "",
    type: "all",
  };

  handleKey = (event) => {
    if (event.key === "Enter")
      this.props.searchMovies(this.state.search, this.state.type);
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };

  render() {
    const { search } = this.state;

    return (
      <div className="row">
        <div className="input-field">
          <input
            id="email_inline"
            type="search"
            className="validate"
            placeholder="Search"
            value={search}
            onKeyDown={this.handleKey}
            onChange={(e) => this.setState({ search: e.target.value })}
          />
          <button
            className="btn search-btn indigo lighten-1"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              checked={this.state.type === "all"}
              data-type="all"
              onChange={this.handleFilter}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={this.handleFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              checked={this.state.type === "series"}
              data-type="series"
              onChange={this.handleFilter}
            />
            <span>Series Only</span>
          </label>
        </div>
      </div>
    );
  }
}
