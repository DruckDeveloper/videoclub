import React, { useState, useEffect } from "react";
import movies from "./apis";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
// Componets
import NavBar from "./components/NavBar";
import Tables from './components/Tables';
import Footer from "./components/Footer";



function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => { 
    async function fetchData() { 
        const {data} = await movies.get("/movies");
        setMoviesList(data);
      } 
  fetchData(); }); 

  const addMovie = async (item) => {
    const { data } = await movies.post("/movies", item);
    setMoviesList((oldList) => [...oldList, data]);
  };

  const removeMovie = async (id) => {
    await movies.delete(`/movies/${id}`);
    setMoviesList((oldList) => oldList.filter((item) => item._id !== id));
  };
  const editMovie = async (id, item) => {
    await movies.put(`/movies/${id}`, item);
  };

  return (
    <>
    <NavBar/>
    <Tables data={moviesList}/>
    <Footer/>
    </>
  )
}

export default App
