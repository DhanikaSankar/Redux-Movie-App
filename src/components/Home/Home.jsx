import React, { useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import axios from "axios";
import movieApi from "../../common/apis/movieApi";
import APIKey from "../../common/apis/movieApiKey";

function Home() {

  const searchMovie = 'Harry';

  useEffect(() => {
   axios.get(`?apiKey=${APIKey}&s=${searchMovie}&type=movie`).then((data)=>{
    console.log(data);
   }).catch((error)=>{
    console.log(error);
   })
  }, [])
  
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
