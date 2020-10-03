import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "./axios";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original"; //base url for images src

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //when row loads this will run once if [], if [movies] everytime movies changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]); //dependency, reruns useEffect whenever data is fetched, using variable fetchUrl that is outside block

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`} //if Row isLargeRow in App.js it applies the row_posterLarge css rules
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path //applies different image types depending on isLargeRow
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      <YouTube videoId={trailerUrl} opts={opts} />
    </div>
  );
}

export default Row;
