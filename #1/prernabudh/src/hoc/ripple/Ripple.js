import React, { useState, useRef } from "react";
import "./Ripple.css";

const Ripple = (props) => {
  const [showRipple, setShowRipple] = useState(false);
  const [rippleConstants, setRippleConstants] = useState({
    height: 0,
    width: 0,
    transform: "scale(0)",
    opacity: 1,
    left: 0,
    top: 0,
  });
  const el = useRef();
  const ripple = useRef();
  const rippleEffectHandler = (event) => {
    setShowRipple(false);
    const container = el.current.getBoundingClientRect();
    const diameter = Math.max(container.height, container.width);
    const radius = diameter / 2;
    setRippleConstants({
      ...rippleConstants,
      height: diameter,
      width: diameter,
      transform: "scale(0)",
      opacity: 1,
      left: event.pageX - (container.left + radius),
      top: event.pageY - (container.top + radius),
    });
    setShowRipple(true);
    setTimeout(() => {
      setShowRipple(false);
    }, 400);
  };
  return (
    <div className="ripple-container" ref={el} onClick={rippleEffectHandler}>
      {showRipple ? (
        <span
          className="ripple"
          ref={ripple}
          style={{ ...rippleConstants }}
        ></span>
      ) : null}
      {props.children}
    </div>
  );
};

export default Ripple;
