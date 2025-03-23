import {Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import PoliceDashboard from "./components/PoliceDashboard";
import CurNews from "./components/CurNews";
import PoliceStats from "./components/PoliceStats";
import Cases1 from "./components/Cases1";
import UserAlerts from "./components/userAlerts";
import UserDashboard from "./components/UserDashboard";
import ReportingAlert from "./components/ReportingAlert";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<PoliceDashboard />} />
          <Route path="/news" element={<CurNews />} />
          <Route path="/stats" element={<PoliceStats />} />
          <Route path="/cases" element={<Cases1 />} />
          <Route path="/alerts" element={<UserAlerts />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/report" element={<ReportingAlert />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
