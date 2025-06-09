import background from "../assets/manuhome.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  function handleNav() {
    navigate("/dashboard");
  }

  return (
    <div style={{ position: "relative", height: "100vh", width: "100vw" }}>
      {/* Fundo com blur */}
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

      {/* Texto no canto superior esquerdo, sem blur */}
      <div
        style={{
          position: "absolute",
          top: "40px",
          left: "40px",
          zIndex: 1,
          color: "white",
          textAlign: "left",
        }}
      >
        <h1 style={{ fontSize: "3.4rem", margin: 0, lineHeight: "1.3" }}>
          Emmanuelly Mariz, <br /> Ph.D. in Biomedical Science
        </h1>
        <p style={{ fontSize: "1.8rem", marginTop: "10px", lineHeight: "1.5" }}>
          Lead Researcher in Cognitive <br />
          Systems & Neural Mapping
        </p>
      </div>
      <button onClick={handleNav} className="back-button-home">
        ←
      </button>
    </div>
  );
}

export default Home;
