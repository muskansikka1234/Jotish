import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PhotoResultPage = () => {

    const location = useLocation();
  const navigate = useNavigate();

  const image = location.state?.photo;

   if (!image) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black to-blue-900 text-white">
        No Photo Captured
      </div>
    );
  }

  return (
     <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 flex flex-col items-center justify-center text-white p-10">

      <h1 className="text-3xl font-bold mb-6">
        Photo Result
      </h1>

      <div className="bg-white/10 p-6 rounded-xl shadow-lg">
        <img
          src={image}
          alt="Captured"
          className="w-[400px] rounded-lg"
        />
      </div>

      <button
        onClick={() => navigate("/list")}
        className="mt-6 px-6 py-2 bg-green-500 rounded-lg">
        Back to List Page
      </button>

    </div>
  )
}

export default PhotoResultPage
