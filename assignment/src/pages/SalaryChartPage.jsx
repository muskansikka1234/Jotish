import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";
import { useNavigate } from "react-router-dom";

const SalaryChartPage = () => {
  const [chartData, setChartData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
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

      const firstTen = employees.slice(0, 10).map((emp) => ({
        name: emp[0],
        salary: Number(emp[5].replace(/[^0-9]/g, "")),
      }));

      setChartData(firstTen);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (_, index) => {
    setActiveIndex(index);
  };

  const getBarColor = (salary) => {
    if (salary > 300000) return "#22c55e";   // High → Green
    if (salary > 150000) return "#f59e0b";   // Medium → Orange
    return "#ef4444";                        // Low → Red
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-blue-900 text-white p-10">

      <div className="flex justify-between mb-8">
        <h1 className="text-3xl font-bold">
          Salary Distribution (Top 10 Employees)
        </h1>

        <button
          onClick={() => navigate("/list")}
          className="bg-green-500 px-4 py-2 rounded-lg"
        >
          Back to List
        </button>
      </div>

      <div className="bg-white/10 p-6 rounded-xl shadow-lg">

        <ResponsiveContainer width="100%" height={450}>
          <BarChart
            data={chartData}
            onClick={handleClick}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="name"
              angle={-25}
              textAnchor="end"
              interval={0}
            />

            <YAxis />

            <Tooltip
              formatter={(value) => `$${value}`}
            />

            <Bar
              dataKey="salary"
              radius={[10, 10, 0, 0]}
              animationDuration={800}
            >
              <LabelList
                dataKey="salary"
                position="top"
                formatter={(value) => `$${value}`}
              />

              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={getBarColor(entry.salary)}
                  opacity={activeIndex === index ? 1 : 0.7}
                  cursor="pointer"
                />
              ))}
            </Bar>

          </BarChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
};

export default SalaryChartPage;