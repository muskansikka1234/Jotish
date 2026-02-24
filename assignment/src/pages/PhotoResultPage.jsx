import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PhotoResultPage = () => {

    const navigate = useNavigate();
    const [image, setImage] = useState(null);

    useEffect(() => {
        const storedImage = localStorage.getItem("capturedPhoto");
        if (storedImage) {
            setImage(storedImage);
        }
    }, []);

    if (!image) {
        return <h2 className="text-white text-center mt-10">No Photo Captured</h2>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
            <h1 className="text-3xl mb-6">Captured Photo</h1>

            <img src={image} alt="Captured" className="w-96 rounded-lg mb-6"/>

            <button
                onClick={() => navigate("/list")}
                className="bg-blue-500 px-6 py-2 rounded-lg"
            >
                Go to list
            </button>
        </div>
    );
};

export default PhotoResultPage;