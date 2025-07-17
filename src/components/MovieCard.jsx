import React, { useEffect } from "react";
import { useState } from "react";
import { fetchMovie, posterImageURL } from "../api/apiConfig";
import { useNavigate } from "react-router";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { useFavouite } from "../context/FavoritesContext";
import toast from "react-hot-toast";

const MovieCard = () => {
  const { addFavorite } = useFavouite();
  const [movies, setMovies] = useState([]);
  const [selectedType, setSelectedType] = useState("now_playing");
  const navigate = useNavigate();

  const endpoints = {
    popular: "/movie/popular",
    top_rated: "/movie/top_rated",
    now_playing: "/movie/now_playing",
  };

  useEffect(() => {
    const loadMovie = async () => {
      const data = await fetchMovie(endpoints[selectedType]);
      setMovies(data);
    };
    loadMovie();
  }, [selectedType]);

  const handleClick = (id) => {
    navigate(`/movie/detail/${id}`);
  };

  return (
    <>
      <div className="button flex flex-row gap-5 flex-end w-full justify-end px-4 mt-4">
        <button
          className={`bg-blue-300 px-2 py-2 rounded ${
            selectedType === "popular" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setSelectedType("popular")}
        >
          Populars
        </button>
        <button
          className={`bg-blue-300 px-2 py-2 rounded ${
            selectedType === "top_rated" ? "bg-blue-500 text-white" : ""
          }`}
          onClick={() => setSelectedType("top_rated")}
        >
          Top Rated
        </button>
      </div>
      <div className="Card mt-4 ml-4 flex flex-wrap flex-row gap-10">
        {movies.map((movie) => (
          <div key={movie.id} className="max-w-[150px] cursor-pointer ">
            <div className="image relative">
              <img
                onClick={() => handleClick(movie.id)}
                src={`${posterImageURL}${movie.poster_path}`}
                alt=""
                className="w-full object-cover h-auto rounded-lg"
              />
              <div
                onClick={() => {
                  addFavorite(movie);
                  console.log("Clicked Movie:", movie);
                }}
                className="absolute top-2 right-2 hover:font-bold rounded-full bg-green-500 px-1 py-1 "
              >
                <span className="text-white text-xl leading-none ">
                  <MdOutlineFavoriteBorder />
                </span>
              </div>
            </div>
            <p className="text-sm">{movie.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MovieCard;
