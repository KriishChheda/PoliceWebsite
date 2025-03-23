import React, { useState } from "react";
// import { useNavigate } from "react-router-dom"; // For navigation
import { AlertCircle, XCircle } from "lucide-react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";
import "./Dashboard.css";

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // const navigate = useNavigate(); // Navigation hook

  // Alerts Data
  const alerts = [
    { id: 1, type: "warning", message: "A tiger has been spotted near Jim Corbett National Park. Stay indoors." },
    { id: 2, type: "alert", message: "Terrorist attack in Mumbai's Colaba area. Stay away from the zone." },
    { id: 3, type: "warning", message: "Heavy flooding expected in Chennai. Move to higher ground." },
  ];

  const alertStyles = {
    warning: { background: "#fdf6e3", color: "#856404", borderLeft: "6px solid #f4c542" },
    alert: { background: "#fae3e3", color: "#721c24", borderLeft: "6px solid #e57373" },
  };

  const alertIcons = {
    warning: <AlertCircle style={{ color: "#856404" }} size={24} />,
    alert: <XCircle style={{ color: "#721c24" }} size={24} />,
  };

  // Chart Data
  const pieData = {
    labels: ["Solved", "Pending", "Unsolved"],
    datasets: [{ data: [60, 25, 15], backgroundColor: ["#4caf50", "#ff9800", "#f44336"] }],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [{ label: "Police Cases", data: [20, 35, 50, 40, 55], backgroundColor: "#007bff" }],
  };

  const barOptions = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: "Months" } },
      y: { title: { display: true, text: "Number of Cases" }, beginAtZero: true },
    },
  };

  return (
    <div className="dashboard">
      {/* Left Side - Alerts Section */}
      <div className="left-section">
        <button className="report-alert-btn" onClick={()=>{}}>
          Report an Alert
        </button>
        <hr />
        <h3>Latest Alerts</h3>
        <hr />
        {alerts.map((alert) => (
          <div key={alert.id} style={{ ...alertStyles[alert.type], padding: "15px", margin: "10px 0" }} className="alert-box">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              {alertIcons[alert.type]}
              <span>{alert.message}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Charts Section */}
      <div className="right-section">
        <div className="chart-container">
          <hr />
          <h3>Case Status</h3>
          <hr />
          <Pie data={pieData} />
        </div>
        <div className="chart-container">
          <hr />
          <h3>Cases Over Time</h3>
          <hr />
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
