import React from "react";
import { useNavigate } from "react-router-dom";

function Sidebar({ username }) {
  const navigate = useNavigate();

  function handleLogout() {
    navigate("/");
  }

  function handleIdeas() {
    navigate("/ideas");
  }

  function handleTasks() {
    navigate("/tasks");
  }

  function handleHome() {
    navigate("/home");
  }

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2 className="sidebar-title">🧠 Brain Bank</h2>
        <p className="sidebar-username">Welcome, {username}</p>
      </div>

      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <li className="sidebar-item" onClick={handleHome}>
            🏠 Home
          </li>
          <li className="sidebar-item" onClick={handleIdeas}>
            📓 Ideas
          </li>
          <li className="sidebar-item" onClick={handleTasks}>
            ✅ Tasks
          </li>
          <li className="sidebar-item">📈 Progress</li>
          <li className="sidebar-item">⚙️ Settings</li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
