import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import { getSessionId } from "../api/apiConfig";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();

  const [tokenExists, setTokenExists] = useState(
    () => !!localStorage.getItem("Guest_id")
  );

  useEffect(() => {
    const handleStorage = () => {
      setTokenExists(() => !!localStorage.getItem("Guest_id"));
    };

    window.addEventListener("storage", handleStorage);
    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, []);

  return (
    <>
      <nav className="flex flex-row justify-between items-center text-center border-b mx-auto px-4 py-6 ">
        <p className="text-3xl cursor-pointer" onClick={() => navigate("/")}>
          Navbar
        </p>
        {tokenExists ? (
          <div className="flex flex-row gap-5">
            <p
              onClick={() => navigate("/favorite")}
              className="cursor-pointer font-semibold"
            >
              Favorite
            </p>

            <p className="">Rio Guest</p>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Guest Login
          </button>
        )}
      </nav>
    </>
  );
};

export default Navbar;
