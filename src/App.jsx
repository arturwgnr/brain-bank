import "./App.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "./assets/brainbank8.png";

function App({ setIsLoggedIn, onUsername }) {
  const [usernameInput, setUsernameInput] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin() {
    if (!usernameInput || !password) {
      window.alert("Please enter valid information.");
    } else {
      setIsLoggedIn(true);
      onUsername(usernameInput);
      navigate("/dashboard");
    }
  }

  function handleRegister() {
    navigate("/register");
  }

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="login-section">
        <h2 className="login-title">Brain Bank</h2>

        <div className="input-group">
          <label htmlFor="username" className="login-infos">
            Username
          </label>
          <input
            id="username"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            className="user-input"
            type="text"
            placeholder="Insert username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="login-infos">
            Password
          </label>
          <input
            id="password"
            className="user-input"
            type="password"
            placeholder="Insert password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin} className="login-btn">
          Login
        </button>
        <span className="link" onClick={handleRegister}>
          Create Account
        </span>
      </div>

      <ul className="info-list">
        <li>🔥 Build your discipline</li>
        <li>🧠 Capture deep ideas</li>
        <li>⚔️ Focus mode unlocked</li>
      </ul>

      <button onClick={handleRegister}>→</button>
    </div>
  );
}

export default App;
