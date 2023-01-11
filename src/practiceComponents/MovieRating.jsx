import React from "react";

function MovieRating(props) {
  return (
    <div>
      <p>{props.title}</p>
      <p>{props.genre}</p>
      <p>{props.movierating}</p>
      <ul>
        {" "}
        {props.tags.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default MovieRating;
