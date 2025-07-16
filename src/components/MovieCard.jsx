import React, { useEffect } from "react";
import panther from "../assets/panther.jpg";
import { useState } from "react";
import { fetchMovie, posterImageURL } from "../api/apiConfig";

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  console.log(movies);
  const [selectedType, setSelectedType] = useState("popular");

  const endpoints = {
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    now_playing: "/movie/now_playing",
  };

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovie(endpoints[selectedType]);
      setMovies(data);
      //   console.log(data);
    };
    loadMovie();
  }, [selectedType]);

  return (
    <>
      <div className="Card mt-4 ml-4 flex flex-wrap flex-row gap-10">
        {movies.map((movie) => (
          <div key={movie.id} className="max-w-[150px] cursor-pointer ">
            <div className="image relative">
              <img
                src={`${posterImageURL}${movie.poster_path}`}
                alt=""
                className="w-full object-cover h-auto rounded-lg"
              />
              <span className="absolute bottom-2 text-white text-sm   rounded-sm ml-1">
                Genre
              </span>
            </div>
            <p className="text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
