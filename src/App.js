import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Question from "./Question";
import Score from "./Score";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      correctAnswer: "Mars",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Vincent van Gogh",
        "Michelangelo",
      ],
      correctAnswer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale",
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "Japan", "South Korea", "Vietnam"],
      correctAnswer: "Japan",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Ag", "Ge"],
      correctAnswer: "Au",
    },
    {
      question: "What is the largest ocean in the world?",
      options: [
        "Pacific Ocean",
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
      ],
      correctAnswer: "Pacific Ocean",
    },
    {
      question: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      correctAnswer: "William Shakespeare",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["K2", "Mount Kilimanjaro", "Mount Everest", "Denali"],
      correctAnswer: "Mount Everest",
    },
    {
      question: "Which gas makes up the majority of Earth’s atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Nitrogen",
    },
  ];

  const handleAnswer = (selectedOption) => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Router>
        <Routes>
          {currentQuestion < questions.length ? (
            <Route
              path="/"
              element={
                <Question
                  question={questions[currentQuestion]}
                  onAnswer={handleAnswer}
                  selectedOption={selectedOption}
                  onSelect={handleOptionSelect}
                />
              }
            />
          ) : (
            <Route path="/" element={<Navigate to="/score" />} />
          )}
          <Route
            path="/score"
            element={<Score score={score} totalQuestions={questions.length} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
