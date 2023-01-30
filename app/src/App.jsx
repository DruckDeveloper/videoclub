import React, { useState, useEffect } from "react";
import "./App.css"
import movies from "./apis";

function App() {

  const [video, setVideo] = useState([]);

  async function fetchData() {
    const { data } = await movies.get("/movies");
    setVideo([data]);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>{video}</div>
  )
}

export default App
