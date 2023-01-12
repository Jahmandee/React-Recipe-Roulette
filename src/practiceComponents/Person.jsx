import React, { useState } from "react";
import Name from "./Name";
import Button from "../components/Button";

function Person(props) {
  const [age, setAge] = useState(props.age);

  function addAge() {
    setAge(age + 1);
  }

  function minusAge() {
    setAge(age - 1);
  }
  return (
    <div
      style={{ background: "white", border: "2px solid black", padding: "4px" }}
    >
      <Name name={props.name} />
      <p> My age is {age}</p>
      {props.image && (
        <img alt='profile image' style={{ width: "280px", height: "280px" }} src={props.image} />
      )}
      <Button onClick={addAge}>+</Button>
      <Button onClick={minusAge}>-</Button>
    </div>
  );
}

export default Person;
