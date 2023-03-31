import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import MovieCard from "../components/MovieCard";

const searchURL = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

import Navbar from "../components/Navbar";

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [vote, setVote] = useState(0);

  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchURL}?${apiKey}&query=${query}`;
    getSearchedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <Navbar/>
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <label>Filtre por avaliação:</label>
      <input type="number"
          placeholder=""
          value={vote} 
          onChange={(e) => setVote(e.target.value)}
          />
      <div className="movies-container">
        {movies && movies.map((movie) => movie.vote_average >= vote ? <MovieCard key={movie.id} movie={movie} /> : '')}
      </div>
    </div>
  );
};

export default Search;