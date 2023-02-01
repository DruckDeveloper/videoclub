import React, { useState, useEffect } from "react";
// Import backend endpoint as "movies"
import movies from "./apis";
import "./App.css"
// Bootstramp styles file
import "bootstrap/dist/css/bootstrap.min.css";
//  Componets
import NavBar from "./components/NavBar";
import Tables from './components/Tables';
import Footer from "./components/Footer";
import AddMovie from "./components/AddMovie";



function App() {
  const [moviesList, setMoviesList] = useState([]);

  // Fetch data from backend
  useEffect(() => { 
    async function fetchData() { 
        const {data} = await movies.get("/movies");
        setMoviesList(data);
      } 
  fetchData(); }, []); 
  
  // Function to add new movie items with post method 
  const addMovie = async (item) => {
    const { data } = await movies.post("/movies", item);
    setMoviesList((oldList) => [...oldList, data]);
  };

  // Function to edit movie items with put method 
  const editMovie = async (id, item) => {
    await movies.put(`/movies/${id}`, item);
  };

  // Function to delete movie items with delete method 
  const removeMovie = async (id) => {
    await movies.delete(`/movies/${id}`);
    setMoviesList((oldList) => oldList.filter((item) => item._id !== id));
  };

  return (
    <>
    {/* navbar component with addMovie functionality as a prop */}
    <NavBar add={addMovie}/>
    {/* Table component with addMovie, removeMovie, editMovie functionalities as a prop */}
    <Tables data={moviesList} erase={removeMovie} edit={editMovie}/>
    <Footer/>
    </>
  )
}

export default App
