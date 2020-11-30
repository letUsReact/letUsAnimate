import React from "react";
import Ripples from "../Ripples/Ripples";
const Button = () => {
  return (
    <div style={{ width: "fit-content" }}>
      <Ripples>
        <button>Submit</button>
      </Ripples>
    </div>
  );
};

export default Button;
