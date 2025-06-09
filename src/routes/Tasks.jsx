import background from "../assets/braintasks.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Tasks({ isLoggedIn }) {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("saved-tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("saved-tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  function handleNav() {
    navigate("/dashboard");
  }

  function handleAddOrUpdateTask() {
    if (task.trim() === "") return;

    if (editingId !== null) {
      const updatedTasks = tasks.map((item) =>
        item.id === editingId ? { ...item, content: task } : item
      );
      setTasks(updatedTasks);
      setEditingId(null);
    } else {
      const newTask = {
        id: Date.now(),
        content: task,
      };
      setTasks([...tasks, newTask]);
    }

    setTask("");
  }

  function handleEdit(taskObj) {
    setTask(taskObj.content);
    setEditingId(taskObj.id);
  }

  function handleDelete(id) {
    const updatedTasks = tasks.filter((item) => item.id !== id);
    setTasks(updatedTasks);
    if (editingId === id) {
      setEditingId(null);
      setTask("");
    }
  }

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Overlay com blur */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "blur(1.5px)",
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          paddingTop: "60px",
          alignItems: "center",
          color: "#fff",
          textShadow: "1px 1px 4px #000",
        }}
      >
        <div className="main-div-tasks">
          <h1 className="tasks-title">Welcome to Task Bank</h1>
          <div className="tasks-input-group">
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Insert your task"
              className="tasks-input"
            />
            <button className="tasks-button" onClick={handleAddOrUpdateTask}>
              {editingId !== null ? "Update" : "Add"}
            </button>
          </div>
        </div>

        <ul className="tasks-list">
          {tasks.map((item) => (
            <li className="task-li" key={item.id}>
              <span className="task-content">{item.content}</span>
              <div className="task-buttons">
                <button
                  className="task-edit-button"
                  onClick={() => handleEdit(item)}
                >
                  edit
                </button>
                <button
                  className="task-delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>

        <button onClick={handleNav} className="back-button-tasks">
          ←
        </button>
      </div>
    </div>
  );
}

export default Tasks;
