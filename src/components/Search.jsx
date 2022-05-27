import { useState } from "react";

export const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("all");

  const handleKey = (event) => {
    if (event.key === "Enter") searchMovies(search, type);
  };

  const handleFilter = (e) => {
    setType(e.target.dataset.type);
    searchMovies(search, e.target.dataset.type);
  };

  return (
    <div className="row">
      <div className="input-field">
        <input
          id="email_inline"
          type="search"
          className="validate"
          placeholder="Search"
          value={search}
          onKeyDown={handleKey}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="btn search-btn indigo lighten-1"
          onClick={() => searchMovies(search, type)}
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
            checked={type === "all"}
            data-type="all"
            onChange={handleFilter}
          />
          <span>All</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            data-type="movie"
            onChange={handleFilter}
            checked={type === "movie"}
          />
          <span>Movies</span>
        </label>
        <label>
          <input
            className="with-gap"
            name="group3"
            type="radio"
            checked={type === "series"}
            data-type="series"
            onChange={handleFilter}
          />
          <span>Series Only</span>
        </label>
      </div>
    </div>
  );
};
