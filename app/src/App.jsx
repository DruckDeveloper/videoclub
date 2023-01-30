import React, { useState, useEffect } from "react";
import "./App.css"
import movie from "./apis";

function App() {

  const [video, setVideo] = useState([]);

  async function fetchData() {
    const { data } = await movie.get("/movie");
    setVideo([data]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>ddd</div>
  )
}

export default App
