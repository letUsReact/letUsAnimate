import React from "react";
import Typing from "./Typing/Typing";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div
        style={{
          height: "fit-content",
          width: "fit-content",
          border: "1px solid rgba(90,90,90,0.3)",
          borderRadius: "5px",
        }}
      >
        <Typing></Typing>
      </div>
    </div>
  );
}

export default App;
