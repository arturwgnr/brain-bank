import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import DashboardHome from "../components/DashboardHome";
import background from "../assets/braindashboard2.png";
import "../App.css";

function Dashboard({ isLoggedIn, username }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div
      className="dashboard-container"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      <Sidebar username={username} />

      <div className="dashboard-main">
        {}
        <div className="background-overlay" />

        {}
        <Topbar username={username} />
        <DashboardHome />
      </div>
    </div>
  );
}

export default Dashboard;
