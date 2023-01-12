import React from "react";

const styles = {
  input: {
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    padding: "8px 32px",
    backgroundColor: "white",
    outline: "2px solid #f54748",
  },
};

function TextInput(props) {
  function handleOnChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <input
      onChange={handleOnChange}
      style={styles.input}
      placeholder={props.placeholder}
      type="text"
    />
  );
}

export default TextInput;
