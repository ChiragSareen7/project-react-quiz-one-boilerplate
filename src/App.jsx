import React, { useState } from "react";
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from "./components/QuizComponent";
import ResultComponent from "./components/ResultComponent";

function App() {
  const [start, setStart] = useState(false);
  return (
    <div>
    <div className="App">
    <div>

        <div className="play">
          <button className="playButton" >
            Start
          </button>
        </div>
      
    </div>
    </div>
    <QuizComponent />
    <ResultComponent />
    </div>
  );
}

export default App;
