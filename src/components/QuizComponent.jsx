import ResultComponent from './ResultComponent';
import React, { useState } from "react";

function QuizComponent() {
  const [finish, setFinish] = useState(false);

  return (
    <div className='main'>
      <h1>Questions</h1>

        <div>
          <h4>Question number 1 of 15</h4>
          <h3>Who came first?</h3>
          <div>
            <button>Hen</button>
            <button>Egg</button>
            <button>Both A & B</button>
            <button>None of the above</button>
          </div>
          <br/>
          <div>
            <button>
              End
            </button>
          </div>
        </div>
      
      
    </div>
  );
}

export default QuizComponent;
