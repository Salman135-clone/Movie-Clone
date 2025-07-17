import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { getSessionId } from "../api/apiConfig";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router";

const Login = () => {
  const navigate = useNavigate();
  const generateSessionId = async () => {
    const sessionId = await getSessionId();
    if (sessionId) {
      navigate("/");
    }
    return sessionId;
  };

  return (
    <>
      <Navbar />
      <div className="flex w-full h-screen justify-center items-center">
        <div className="p-5 flex flex-col items-center max-w-[400px] shadow-[7px_1px_10px_3px_rgba(0,_0,_0,_0.1)] w-full">
          <p className="text-center text-lg font-bold mb-4">Login</p>
          <button
            onClick={generateSessionId}
            className="bg-blue-500 text-white px-4 py-2 w-full rounded hover:bg-blue-600 cursor-pointer"
          >
            Login As Guest
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
