import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Score = ({ score, totalQuestions }) => {
  const navigate = useNavigate();
  const playAgain = () => {
    navigate("/");
  };
  return (
    <div className="score-container">
      <h1>Congratulations!</h1>
      <h2>Your Quiz Is Completed</h2>
      <p className="score">
        Your Score: <span className="number">{score}</span> out of{" "}
        {totalQuestions}
      </p>
      <button type="button" className="play-btn" onClick={playAgain}>
        Play again
      </button>
    </div>
  );
};

export default Score;
