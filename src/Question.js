import React, { useState } from "react";
import "./App.css";

const Question = ({ question, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [error, setError] = useState(false);

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
    setError(false);
  };
  const clearAnswer = () => {
    setSelectedOption(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedOption !== null) {
      onAnswer(selectedOption);
      setSelectedOption(null);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="question-container">
      <h2>{question.question}</h2>
      <form onSubmit={handleSubmit}>
        {question.options.map((option, index) => (
          <div key={index} className="options-container">
            <label>
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
              />
              {option}
            </label>
          </div>
        ))}
        {error && (
          <p className="error-message">
            Please select an option before proceeding.
          </p>
        )}
        <button type="submit">Next</button>
        <button type="button" className="clr-btn" onClick={clearAnswer}>
          Clear
        </button>
      </form>
    </div>
  );
};

export default Question;
