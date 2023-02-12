import React from 'react'
import ReactStars from "react-stars";

const MovieCard = ({movie}) => {
  return (
    <div className="MovieCard">
      <h2> {movie.title} </h2>
      <img src={movie.posterURL} alt={movie.title} />
      <p>{movie.description}</p>
      <ReactStars
  count={5}
  size={24}
  color2={'#ffd700'} value={movie.rating} edit={false} />,
    </div>
  );
}

export default MovieCard