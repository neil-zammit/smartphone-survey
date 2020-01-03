import React, { useState } from 'react';
import Navbar from '../layout/Navbar';

// OPTIONS
// Store all state properties and questions in the Survey Component
// Store state in survey component and questions in separate components
// Store both state and questions in separate components

const Survey = () => {
  // State

  // Question Count
  const [question, setQuestion] = useState(1);

  // Q1
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('male');

  // Q2
  const [ownsSmartphone, setOwnsSmartphone] = useState('yes');

  // Q3
  const [brand, setBrand] = useState('samsung');

  // Q4
  const [usedApple, setUsedApple] = useState('yes');

  // Q5
  const [preferredOS, setPreferredOS] = useState('ios');

  // Q6
  const [smartphoneUsage, setSmartphoneUsage] = useState('calls');

  // Q7
  const [buyingFactor, setBuyingFactor] = useState('design');

  // Q8
  const [smartphoneDescription, setSmartphoneDescription] = useState('flashy');

  // Q9
  const [nextSmartphone, setNextSmartphone] = useState('samsung');

  // Functions
  const nextQuestion = (): void => {
    setQuestion(question + 1);
  };

  const skipQuestion = (): void => {
    setQuestion(question + 2);
  };

  const skipTwoQuestions = (): void => {
    setQuestion(question + 3);
  };

  const endSurvey = (): void => {
    setQuestion(10);
  };

  // Cases / Questions
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
                value={age}
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
                value={gender}
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
      return (
        <div>
          <Navbar />
          <div className="container">
            <h1>Which smartphone brand is your main phone?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={brand}
                onChange={e => setBrand(e.target.value)}
              >
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="oneplus">Oneplus</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="other">Other</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() =>
                brand !== 'apple' ? nextQuestion() : skipTwoQuestions()
              }
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
            <h1>Have you ever used an iPhone?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={usedApple}
                onChange={e => setUsedApple(e.target.value)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() =>
                usedApple === 'yes' ? nextQuestion() : skipQuestion()
              }
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
            <h1>Do you prefer iOS (iPhone Operating System) or Android?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={preferredOS}
                onChange={e => setPreferredOS(e.target.value)}
              >
                <option value="ios">iOS</option>
                <option value="android">Android</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => nextQuestion()}
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
            <h1>What do you mostly use your phone for?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={smartphoneUsage}
                onChange={e => setSmartphoneUsage(e.target.value)}
              >
                <option value="calls">Making phone calls</option>
                <option value="messaging">
                  Sending messages (text, email or online messaging)
                </option>
                <option value="social media">
                  Browsing social media (Facebook, Instagram, Twitter)
                </option>
                <option value="photos">Taking Photos and Video</option>
                <option value="games">Playing Games</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => nextQuestion()}
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
            <h1>What is the most important factor when buying a smartphone?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={buyingFactor}
                onChange={e => setBuyingFactor(e.target.value)}
              >
                <option value="design">Design</option>
                <option value="performance">Performance</option>
                <option value="price">Value for money</option>
                <option value="camera">Good Quality Camera</option>
                <option value="other">Other</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => nextQuestion()}
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
            <h1>Which of the following describes your phone best?</h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={smartphoneDescription}
                onChange={e => setSmartphoneDescription(e.target.value)}
              >
                <option value="flashy">Flashy</option>
                <option value="durable">Durable</option>
                <option value="lightweight">Lightweight</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => nextQuestion()}
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
            <h1>
              If you were to switch your phone, what brand would you buy next?
            </h1>
            <form onSubmit={e => e.preventDefault()}>
              <select
                className="text-margin"
                value={nextSmartphone}
                onChange={e => setNextSmartphone(e.target.value)}
              >
                <option value="samsung">Samsung</option>
                <option value="apple">Apple</option>
                <option value="oneplus">Oneplus</option>
                <option value="xiaomi">Xiaomi</option>
                <option value="other">Other</option>
              </select>
            </form>
            <button
              className="button"
              onClick={() => nextQuestion()}
              style={{ padding: '0.7rem 3rem', marginTop: '2rem' }}
            >
              Next
            </button>
          </div>
        </div>
      );
    case 10:
      // State logs
      console.log(`Age: ${age}`);
      console.log(`Gender: ${gender}`);
      console.log(`Smartphone Owner: ${ownsSmartphone}`);
      console.log(`Smartphone Brand: ${brand}`);
      console.log(`Used iPhone: ${usedApple}`);
      console.log(`Preferred OS: ${preferredOS}`);
      console.log(`Main Use: ${smartphoneUsage}`);
      console.log(`Main Buying Factor: ${buyingFactor}`);
      console.log(`Smartphone Description: ${smartphoneDescription}`);
      console.log(`Next Smartphone Brand: ${nextSmartphone}`);
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

  return <div></div>;
};

export default Survey;
