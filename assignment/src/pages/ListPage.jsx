import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ListPage = () => {

    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.post(
                "https://backend.jotish.in/backend_dev/gettabledata.php",
                {
                    username: "test",
                    password: "123456",
                }
            );

            console.log("API Response:", response.data);

           
            const tableData = response.data?.TABLE_DATA?.data || [];

            
            const formattedData = tableData.map((emp) => ({
                name: emp[0],
                position: emp[1],
                office: emp[2],
                salary: emp[3],
                startDate: emp[4],
                totalSalary: emp[5],
            }));

            setEmployees(formattedData);
            setLoading(false);
        } catch (err) {
            console.error(err);
            setError("Failed to fetch data");
            setLoading(false);
        }
    };

    const handleLogout = () => {
        navigate("/");
    };
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#071226] to-[#020817] text-white p-8">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
                <h1 className="text-3xl font-semibold">Employee List</h1>

                <div className="flex gap-3 flex-wrap">
                    <button
                        onClick={() => navigate("/salary-chart")}
                        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                    >
                        Salary Chart
                    </button>

                    <button
                        onClick={() => navigate("/map")}
                        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
                    >
                        City Map
                    </button>

                    <button
                        onClick={handleLogout}
                        className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* Loading State */}
            {loading && (
                <p className="text-gray-400 animate-pulse">
                    Loading employee data...
                </p>
            )}

            {/* Error State */}
            {error && (
                <p className="text-red-400">
                    {error}
                </p>
            )}

            {/* Table */}
            {!loading && !error && (
                <div className="overflow-x-auto rounded-2xl border border-white/10 bg-[#020817]/70 backdrop-blur-lg">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 text-gray-300">
                            <tr>
                                <th className="p-4">Name</th>
                                <th className="p-4">Position</th>
                                <th className="p-4">Office</th>
                                <th className="p-4">Salary</th>
                                <th className="p-4">Start Date</th>
                                <th className="p-4">Total Salary</th>
                            </tr>
                        </thead>

                        <tbody>
                            {employees.map((emp, index) => (
                                <tr
                                    key={index}
                                    onClick={() => navigate(`/details/${index}`, { state: emp })}
                                    className="border-t border-white/10 hover:bg-white/5 cursor-pointer transition"
                                >
                                    <td className="p-4">{emp.name}</td>
                                    <td className="p-4">{emp.position}</td>
                                    <td className="p-4">{emp.office}</td>
                                    <td className="p-4">$ {emp.salary}</td>
                                    <td className="p-4">{emp.startDate}</td>
                                    <td className="p-4">
                                        <span className="px-2 py-1 text-xs rounded bg-blue-500/20 text-blue-400">
                                            {emp.totalSalary}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Empty State */}
            {!loading && employees.length === 0 && (
                <p className="text-gray-400 mt-4">
                    No employee data available.
                </p>
            )}
        </div>
    )
}

export default ListPage
