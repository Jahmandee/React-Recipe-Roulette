import React from "react";

const styles = {
  fontSize: "16px",
  border: "none",
  borderRadius: "8px",
  padding: "8px 32px",
  backgroundColor: "#f54748",
  outline: "2px solid #f54748",
  color: "white",
  textAlign: "center",
  cursor: "pointer",
};

function Button(props) {
  return (
    <button onClick={props.onClick} style={styles}>
      {props.children}
    </button>
  );
}

export default Button;
