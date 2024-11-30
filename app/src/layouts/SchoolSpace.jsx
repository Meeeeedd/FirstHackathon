import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import { useState, useEffect } from "react";
import axios from "axios";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function SchoolSpace() {
  const [schoolData, setSchoolData] = useState({ totalWeight: 0, rank: 0 });
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchSchoolData();
  }, []);

  const fetchSchoolData = () => {
    setLoading(true);
    axios
      .get("/api/school")
      .then((response) => setSchoolData(response.data))
      .catch((error) => console.error("Error fetching school data:", error))
      .finally(() => setLoading(false));
  };

  const chartData = {
    labels: ["Recycling Progress"],
    datasets: [
      {
        label: "Total Weight (kg)",
        data: [schoolData.totalWeight],
        backgroundColor: ["#6a0dad"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`student-space-container ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>School Dashboard</h1>
      </header>

      <div className="student-info">
        <h2>School Statistics</h2>
        <p>Total Weight Recycled: {schoolData.totalWeight} kg</p>
        <p>School Ranking: {schoolData.rank}</p>
      </div>

      <div className="ranking-section">
        <div className="rank-card">
          <h3>School Rank</h3>
          <p className="rank-number">{schoolData.rank}</p>
        </div>
        <div className="stat-card">
          <h3>Total Weight Recycled</h3>
          <p className="stat-number">{schoolData.totalWeight} kg</p>
        </div>
      </div>

      <div className="chart-section">
        <h3>Recycling Progress</h3>
        <Bar data={chartData} />
      </div>

      <div className="button-container">
        <button className="update-btn" onClick={fetchSchoolData} disabled={loading}>
          {loading ? "Updating..." : "Update Data"}
        </button>
      </div>
    </div>
  );
}

export default SchoolSpace;
