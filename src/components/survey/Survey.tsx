import React, { useState } from 'react';
import Navbar from '../layout/Navbar';

// OPTIONS
// Store all state properties and questions in the Survey Component
// Store state in survey component and questions in separate components
// Store both state and questions in separate components

const Survey = () => {
  // Declare new state var
  const [question, setQuestion] = useState(1);

  // Have all state here, pass state methods as props
  // Q1
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');

  // Q2
  const [ownsSmartphone, setOwnsSmartphone] = useState('yes');

  // Functions
  const nextQuestion = (): void => {
    setQuestion(question + 1);
  };

  // const skipQuestion = (): void => {
  // call this for when you want to skip question
  // }

  const endSurvey = (): void => {
    setQuestion(10);
  };

  // <form>
  //   <input
  //     type="text"
  //     value={title}
  //     onChange={e => setTitle(e.target.value)}
  //   ></input>
  // </form>;

  switch (question) {
    case 1:
      return (
        <div>
          <Navbar />
          <div className="container">
            <h1>Age</h1>{' '}
            <form onSubmit={e => e.preventDefault()}>
              {' '}
              <input
                className="text-margin"
                type="number"
                min="0"
                max="100"
                onChange={e => setAge(parseInt(e.target.value))}
              ></input>
            </form>
            <h1>Gender</h1>{' '}
            <form>
              {' '}
              <select
                className="text-margin"
                name="text"
                onChange={e => setGender(e.target.value)}
              >
                <option value="male">M</option>
                <option value="female">F</option>
                <option value="other">Other</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => (age < 18 ? endSurvey() : nextQuestion())}
              style={{ padding: '0.7rem 3rem', marginTop: '2rem' }}
            >
              Next
            </button>
          </div>
        </div>
      );
    case 2:
      // State logs
      console.log(age);
      console.log(gender);
      return (
        <div>
          <Navbar />
          <div className="container">
            <h1>Do you own a smartphone?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={ownsSmartphone}
                onChange={e => setOwnsSmartphone(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() =>
                ownsSmartphone === 'no' ? endSurvey() : nextQuestion()
              }
              style={{ padding: '0.7rem 3rem', marginTop: '2rem' }}
            >
              Next
            </button>
          </div>
        </div>
      );
    case 3:
      // State logs
      console.log(age);
      console.log(gender);
      console.log(ownsSmartphone);
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
    case 4:
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
    case 5:
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
    case 6:
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
    case 7:
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
    case 8:
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
    case 9:
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
    case 10:
      return (
        <div>
          <Navbar />
          <div className="container">
            <h1>Thank you for taking the survey.</h1>
            <p className="text-margin">Your responses have been retained.</p>
          </div>
        </div>
      );
  }

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
