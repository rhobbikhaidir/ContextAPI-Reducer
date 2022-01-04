import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  if (props.btnOuline) {
    return <button className="blabal"></button>;
  }
  if (props.btnOuline) {
    return <button className="blabal"></button>;
  }
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
