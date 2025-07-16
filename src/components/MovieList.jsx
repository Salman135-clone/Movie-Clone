import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <>
      <div className="button flex flex-row gap-10 flex-end w-full justify-end">
        <button>Populars</button>
        <button>Top Rated</button>
      </div>
      <div className="flex flex-row flex-wrap w-full ">
        <MovieCard />
      </div>
    </>
  );
};

export default MovieList;
