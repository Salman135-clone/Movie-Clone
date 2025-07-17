import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router";
import { apiConfig, posterImageURL } from "../api/apiConfig";
import { MoonLoader } from "react-spinners";

const Detail = () => {
  const { id } = useParams();

  const [movie, setMovies] = useState(null);
  //   console.log(movie);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await apiConfig.get(`/movie/${id}`);
        // console.log(response.data);
        setMovies(response.data);
      } catch (error) {
        throw error;
      }
    };
    fetchDetail();
  }, [id]);

  if (!movie) {
    return (
      <div className="loader flex justify-center h-screen items-center">
        <MoonLoader />
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-row gap-10 flex-wrap">
          <div className="image max-w-sm">
            <img
              src={`${posterImageURL}${movie.poster_path}`}
              alt=""
              className="w-64 rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h3 className="font-semibold text-2xl">{movie.title}</h3>
            <div className="status ">
              <p>
                Movie Status:
                <span className="text-gray-500 ml-2 ">{movie.status}</span>
              </p>
              <p>
                Release Date:
                <span className="text-gray-500 ml-2">{movie.release_date}</span>
              </p>
            </div>
            {/* <div className="overview">
              <p>{movie.overview}</p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
