import React, { useState } from 'react';
import Navbar from '../layout/Navbar';

const Survey = () => {
  // Declare new state var
  const [question, setQuestion] = useState(1);

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1>Question {question}</h1>
        <button
          className="button"
          onClick={() => setQuestion(question + 1)}
          style={{ padding: '0.7rem 3rem', marginTop: '2rem' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Survey;
