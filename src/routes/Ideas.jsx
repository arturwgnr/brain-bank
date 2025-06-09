import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import background from "../assets/ideasbank3.png";

function Ideas({ isLoggedIn }) {
  const navigate = useNavigate();
  const [idea, setIdea] = useState("");
  const [ideas, setIdeas] = useState([]);
  const [selectedIdea, setSelectedIdea] = useState(null);

  useEffect(() => {
    const savedIdeas = localStorage.getItem("ideas-bank");
    if (savedIdeas) {
      setIdeas(JSON.parse(savedIdeas));
    }
  }, []);

  useEffect(() => {
    console.log("Recovered ideas from storage:", ideas);
  }, [ideas]);

  const isFirstLoad = useRef(true);

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false;
      return;
    }

    localStorage.setItem("ideas-bank", JSON.stringify(ideas));
  }, [ideas]);

  useEffect(() => {
    if (isLoggedIn === false) {
      navigate("/");
    }
  }, [isLoggedIn, navigate]);

  function handleAddIdea() {
    if (idea.trim() === "") return;

    const newIdea = {
      id: Date.now(),
      content: idea,
      description: "",
    };

    setIdeas([...ideas, newIdea]);
    setIdea("");
  }

  function handleDelete(id) {
    const updatedIdeas = ideas.filter((item) => item.id !== id);
    setIdeas(updatedIdeas);
  }

  function handleNav() {
    navigate("/dashboard");
  }

  function handleDescriptionChange(e) {
    const updatedIdea = { ...selectedIdea, description: e.target.value };
    setSelectedIdea(updatedIdea);
  }

  function handleSave() {
    const updatedIdeas = ideas.map((item) =>
      item.id === selectedIdea.id ? selectedIdea : item
    );
    setIdeas(updatedIdeas);
    setSelectedIdea(null);
  }

  return (
    <div
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Camada com background + blur */}
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

      {/* Conteúdo da página */}
      <div
        className="ideas-container"
        style={{ position: "relative", zIndex: 1 }}
      >
        <h1 className="ideas-title">Your Idea Bank</h1>
        <p className="ideas-subtitle">
          Save, organize and revisit your raw thoughts
        </p>

        <div className="ideas-input-group">
          <input
            value={idea}
            type="text"
            onChange={(e) => setIdea(e.target.value)}
            placeholder="What's on your mind?"
            className="ideas-input"
          />
          <button onClick={handleAddIdea} className="ideas-button">
            Add
          </button>
        </div>

        <ul className="ideas-list">
          {ideas.map((item) => (
            <li key={item.id} className="ideas-item">
              {item.content}
              <div>
                <button
                  className="idea-details-button"
                  onClick={() => setSelectedIdea(item)}
                >
                  details
                </button>
                <button
                  className="idea-delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </button>
              </div>
            </li>
          ))}
        </ul>

        {selectedIdea && (
          <div className="idea-detail-overlay">
            <div className="idea-detail-card">
              <h2>{selectedIdea.content}</h2>
              <textarea
                placeholder="Add a description..."
                value={selectedIdea.description || ""}
                onChange={handleDescriptionChange}
              ></textarea>
              <div className="idea-detail-actions">
                <button className="save-idea-button" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="back-idea-button"
                  onClick={() => setSelectedIdea(null)}
                >
                  Back
                </button>
              </div>
            </div>
          </div>
        )}

        <button onClick={handleNav} className="back-button">
          ←
        </button>
      </div>
    </div>
  );
}

export default Ideas;
