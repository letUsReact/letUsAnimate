import React, { useRef, useState } from "react";
import "./Ripple.css";
const Ripples = (props) => {
  const rippleRef = useRef();
  const [ripples, setRipples] = useState([]);
  const onClickHandler = (e) => {
    const divPos = rippleRef.current.getClientRects()[0];
    const X = e.clientX - divPos.x;
    const Y = e.clientY - divPos.y;
    let tempRipples = [...ripples];
    const tempId = Math.random();
    tempRipples.push({
      id: tempId,
      X,
      Y,
    });
    setRipples(tempRipples);
    tempRipples = tempRipples.filter((ripple) => ripple.id === tempId);
    setRipples(tempRipples);
  };
  return (
    <>
      <div
        ref={rippleRef}
        onClick={(e) => onClickHandler(e)}
        style={{
          height: "100%",
          width: "100%",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {ripples.map((ripple) => {
          return (
            <div
              className="ripple"
              key={ripple.id}
              style={{
                position: "absolute",
                top: ripple.Y,
                left: ripple.X,
                height: Math.max(
                  2 * rippleRef.current.clientHeight,
                  2 * rippleRef.current.clientWidth
                ),
                width: Math.max(
                  2 * rippleRef.current.clientHeight,
                  2 * rippleRef.current.clientWidth
                ),
              }}
            ></div>
          );
        })}
        {props.children}
      </div>
    </>
  );
};

export default Ripples;
