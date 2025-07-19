import React, { useState } from "react";
import Button from "./components/Button";
import "./App.css";

const App = () => {
  const [joke, setJoke] = useState("");

  const fetchJoke = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke("Failed to fetch a joke. Try again.");
    }
  };

  return (
    <div className="container">
      <h1>Joke Generator Using React and Joke API</h1>
      <Button onClick={fetchJoke} />
      <p className="joke-text">{joke}</p>
    </div>
  );
};

export default App;

