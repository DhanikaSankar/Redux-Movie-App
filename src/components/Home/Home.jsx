import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";
import movieApi from "../../common/apis/movieApi";
import { apiKey } from "../../common/apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieslice";

function Home() {
  const searchMovie = "Harry";
  const dispatch = useDispatch();


  useEffect(() => {
    //  axios.get(`?apiKey=${apiKey}&s=${searchMovie}&type=movie`).then((data)=>{
    //   console.log(data);
    //  }).catch((error)=>{
    //   console.log(error);
    //  })

    // Using fetch method

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${apiKey}&s=${searchMovie}&type=movie`)
        .catch((error) => {
          console.log(error);
        });
      // console.log(response);
      dispatch(addMovies(response.data))    
    };
    fetchMovies();

  }, []);


  return (
    <>
      <div>Banner Image</div>
      <div>
        <MovieList />
      </div>
    </>
  );
}

export default Home;
