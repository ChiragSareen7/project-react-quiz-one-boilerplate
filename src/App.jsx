import React, { useState } from "react";
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from "./components/QuizComponent";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div className="App">
    <div>
    {!start && (
        <div className="play">
          <button className="playButton" onClick={() => setStart(true)}>
            Start
          </button>
        </div>
      )}
      {start && <QuizComponent />}
    </div>
    </div>
  );
}

export default App;
