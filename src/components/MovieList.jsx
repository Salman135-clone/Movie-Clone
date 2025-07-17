import React from "react";
import MovieCard from "./MovieCard";

const MovieList = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap w-full ">
        <MovieCard />
      </div>
    </>
  );
};

export default MovieList;
