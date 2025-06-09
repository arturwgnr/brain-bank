import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.jsx";
import Register from "./routes/Register.jsx";
import Dashboard from "./routes/Dashboard.jsx";
import Ideas from "./routes/Ideas.jsx";
import Tasks from "./routes/Tasks.jsx";
import Home from "./routes/Home.jsx";
import "./index.css";

function Root() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App setIsLoggedIn={setIsLoggedIn} onUsername={setUsername} />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<Dashboard isLoggedIn={isLoggedIn} username={username} />}
        />

        <Route
          path="/ideas"
          element={<Ideas isLoggedIn={isLoggedIn} />}
        ></Route>

        <Route
          path="/tasks"
          element={<Tasks isLoggedIn={isLoggedIn} />}
        ></Route>

        <Route path="/home" element={<Home isLoggedIn={isLoggedIn} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Root />
  </StrictMode>
);
