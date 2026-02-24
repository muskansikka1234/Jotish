import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import "leaflet/dist/leaflet.css";

import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const CityMapPage = () => {
  const [cities, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://backend.jotish.in/backend_dev/gettabledata.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: "test",
          password: "123456",
        }),
      }
    );

    const result = await response.json();
    const employees = result.TABLE_DATA.data;

    const cityCounts = {};

    employees.forEach((emp) => {
      const city = emp[2];
      cityCounts[city] = (cityCounts[city] || 0) + 1;
    });

    const coordinates = {
      Tokyo: [35.6762, 139.6503],
      Edinburgh: [55.9533, -3.1883],
      "San Francisco": [37.7749, -122.4194],
      "New York": [40.7128, -74.006],
      London: [51.5072, -0.1276],
      Singapore: [1.3521, 103.8198],
    };

    const mappedCities = Object.keys(cityCounts)
      .map((city) => ({
        name: city,
        count: cityCounts[city],
        position: coordinates[city],
      }))
      .filter((city) => city.position);

    setCities(mappedCities);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white p-10">

      <div className="flex justify-between mb-6">
        <h1 className="text-3xl font-bold">
          Employee Distribution by City
        </h1>

        <button
          onClick={() => navigate("/list")}
          className="bg-green-500 px-4 py-2 rounded-lg"
        >
          Back to List
        </button>
      </div>

      <div className="rounded-xl overflow-hidden shadow-lg">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {cities.map((city, index) => (
            <Marker key={index} position={city.position}>
              <Popup>
                <strong>{city.name}</strong>
                <br />
                Employees: {city.count}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

    </div>
  );
};

export default CityMapPage;