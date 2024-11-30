import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Static data for illustration
  const recyclingData = {
    totalWeight: 320,
    rank: 5,
  };

  const chartData = {
    labels: ["Recycling Progress"],
    datasets: [
      {
        label: "Total Weight (kg)",
        data: [recyclingData.totalWeight],
        backgroundColor: "#6a0dad",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className={`home-page-container ${darkMode ? "dark" : ""}`}>
      <header className="header">
        <h1>Recycling Dashboard</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>

      <section className="overview">
        <div className="overview-header">
          <h2>Overview</h2>
          <p>
            Welcome to the recycling management platform. Below is the current
            status of our recycling efforts.
          </p>
        </div>
        <div className="statistics">
          <div className="stat-card">
            <h3>Total Weight Recycled</h3>
            <p>{recyclingData.totalWeight} kg</p>
          </div>
          <div className="stat-card">
            <h3>School Rank</h3>
            <p>{recyclingData.rank}</p>
          </div>
        </div>
      </section>

      <section className="chart-section">
        <h3>Recycling Progress</h3>
        {loading ? (
          <p>Loading...</p>
        ) : chartData ? (
          <Bar data={chartData} />
        ) : (
          <p>No data available.</p>
        )}
      </section>

      <section className="cta-section">
        <button
          className="go-to-dashboard-btn"
          onClick={() => navigate("/school-dashboard")}
        >
          Go to School Dashboard
        </button>
      </section>
    </div>
  );
}

export default HomePage;
