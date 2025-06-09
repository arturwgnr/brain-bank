import { useNavigate } from "react-router-dom";
import { useState } from "react";
import background from "../assets/brainregister1.png";
function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister() {
    if (!username || !password) {
      alert("Please fill in all fields.");
      return;
    } else if (password !== repeatPassword) {
      alert("Passwords must match");
    } else {
      navigate("/dashboard");
    }
  }

  function handleMainPage() {
    navigate("/");
  }

  return (
    <div
      className="app-container"
      style={{ backgroundImage: `url(${background})` }}
    >
      <h1 className="h1text">Create your account</h1>

      <div className="login-section">
        <h2 className="login-title">Register</h2>

        <div className="input-group">
          <label htmlFor="username" className="login-infos">
            Username
          </label>
          <input
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            className="user-input"
            type="text"
            placeholder="Create username"
          />
        </div>

        <div className="input-group">
          <label htmlFor="password" className="login-infos">
            Password
          </label>
          <input
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="user-input"
            type="password"
            placeholder="Create password"
          />
        </div>

        <div className="input-group">
          <label htmlFor="repeat" className="login-infos">
            Repeat Password
          </label>
          <input
            id="repeat"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            className="user-input"
            type="password"
            placeholder="Repeat password"
          />
        </div>

        <button onClick={handleRegister} className="login-btn">
          Register
        </button>
        <span className="link" onClick={handleMainPage}>
          Already have an account?
        </span>
      </div>

      <button onClick={handleMainPage}>←</button>
    </div>
  );
}

export default Register;
