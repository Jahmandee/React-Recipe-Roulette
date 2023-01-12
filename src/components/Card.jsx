import React from "react";

const styles = {
  container: {
    backgroundColor: "white",
    color: "grey",
    boxShadow: "10px 5px 5px grey",
    listStyleType: "none",
    width: "250px",
    height: "300px",
  },
  title: {
    textAlign: "center",
    width: "250px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    paddingBottom: "12px",
  },
  image: {
    width: "100%",
    minHeight: "250px",
  },
};

function Card(props) {
  return (
    <li style={styles.container}>
      <img alt={props.alt} style={styles.image} src={props.image} />
      <p style={styles.title}>{props.title}</p>
    </li>
  );
}

export default Card;
