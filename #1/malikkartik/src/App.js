import React from "react";
import "./App.css";
import Ripples from "./Ripples/Ripples";

function App() {
  return (
    <>
      <div className="card">
        <Ripples>
          <div></div>
        </Ripples>
      </div>
      {/* <Button></Button> */}
    </>
  );
}

export default App;
