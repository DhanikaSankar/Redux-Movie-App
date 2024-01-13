import React from "react";
import { useSelector } from "react-redux";
import { getAllMovies } from "../../features/movies/movieslice";
import { Card } from "react-bootstrap";

function MovieList() {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";
console.log(movies.Search);
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        <Card key={index} data={movie} />;
      })
    ) : (
      <div>
        <h3>{movies.Error}</h3>
      </div>
    );

    console.log(renderMovies);

  return (
    <div>
      <div>
        <h3>Movies</h3>
        <div style={{color:"red"}}>{renderMovies}</div>
      </div>
    </div>
  );
}

export default MovieList;
