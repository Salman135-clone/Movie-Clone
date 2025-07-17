import React from "react";
import { useFavouite } from "../context/FavoritesContext";
import Navbar from "../components/Navbar";
import panther from "../assets/panther.jpg";
import { AiOutlineDelete } from "react-icons/ai";
import { posterImageURL } from "../api/apiConfig";
const Favorite = () => {
  const { removeFavorite, favorite } = useFavouite();
  return (
    <>
      <Navbar />
      <div>
        <div className="mx-auto px-4 py-6 h-full ">
          <p className="font-semibold text-2xl ">My Favorite </p>
          <div className="center mt-4">
            {favorite.length === 0 ? (
              <div className="message flex  justify-center items-center   ">
                <p>No favorite movie added. </p>
              </div>
            ) : (
              <div>
                {favorite.map((movie) => (
                  <div
                    key={movie.id}
                    className="detail mb-4 w-full flex flex-row gap-5 rounded-sm hover:bg-gray-200"
                  >
                    <div className="image max-w-[150px] h-[170px] ">
                      <img
                        src={`${posterImageURL}${movie.poster_path}`}
                        alt=""
                        className="rounded-sm h-full"
                      />
                    </div>
                    <div className="flex flex-col justify-between py-2">
                      <div className="text">
                        <p className="font-semibold mb-4 text-xl">
                          {movie.title}
                        </p>
                      </div>
                      <div className="button">
                        <button
                          className="flex flex-row justify-center items-center text-center rounded-sm"
                          onClick={() => removeFavorite(movie.id)}
                        >
                          <span className="text-red-500 hover:underline font-medium cursor-pointer">
                            Remove
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
