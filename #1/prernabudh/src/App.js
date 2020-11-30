import "./App.css";
import Ripple from "./hoc/ripple/Ripple";

function App() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "200px",
          height: "50px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
        }}
      >
        <Ripple>
          <button
            style={{
              backgroundColor: "pink",
              height: "100%",
              width: "100%",
              border: "none",
              outline: "none",
            }}
          >
            Hello world!
          </button>
        </Ripple>
      </div>
    </div>
  );
}

export default App;
