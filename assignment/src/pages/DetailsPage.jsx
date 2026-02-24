import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const DetailsPage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const employee = location.state;

    const videoRef = useRef(null);
    const canvasRef = useRef(null);

    // Start Camera
    const startCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true,
            });
            videoRef.current.srcObject = stream;
        } catch (err) {
            alert("Camera permission denied");
        }
    };

    // Capture Photo
    const capturePhoto = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0);

        const imageData = canvas.toDataURL("image/png");

        navigate("/photo", { state: { photo: imageData } });
    };

    if (!employee) {
        return <h2 className="text-white text-center mt-10">No Data Found</h2>;
    }

    return (
        <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white p-10">
            <h1 className="text-3xl font-bold mb-6">Employee Details</h1>

            <div className="bg-white/10 p-6 rounded-xl mb-6">
                <p><strong>Name:</strong> {employee.name}</p>
                <p><strong>Position:</strong> {employee.position}</p>
                <p><strong>Office:</strong> {employee.office}</p>
                <p><strong>Salary:</strong> $ {employee.salary}</p>
                <p><strong>Start Date:</strong> {employee.startDate}</p>
                <p><strong>Total Salary:</strong> {employee.totalSalary}</p>
            </div>

            <button
                onClick={startCamera}
                className="bg-green-500 px-6 py-2 rounded-lg mb-4"
            >
                Open Camera
            </button>

            <div className="mb-4">
                <video ref={videoRef} autoPlay className="w-96 rounded-lg" />
            </div>

            <button
                onClick={capturePhoto}
                className="bg-blue-500 px-6 py-2 rounded-lg"
            >
                Capture Photo
            </button>

            <canvas ref={canvasRef} style={{ display: "none" }} />
        </div>
    )
}

export default DetailsPage
