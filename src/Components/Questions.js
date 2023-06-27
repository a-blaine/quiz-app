import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function Questions({ questions, loaded }) {
  const { score, setScore, quizState, setQuizState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState(false);

  const nextQuestion = () => {
    if (optionChosen === true) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  if (loaded) {
    return (
      <div className="Questions">
        <section>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            <button onClick={() => setOptionChosen(false)}>
              {questions[currentQuestion].incorrect_answers[2]}
            </button>
            <button onClick={() => setOptionChosen(true)}>
              {questions[currentQuestion].correct_answer}
            </button>
            <button onClick={() => setOptionChosen(false)}>
              {questions[currentQuestion].incorrect_answers[0]}
            </button>
            <button onClick={() => setOptionChosen(false)}>
              {questions[currentQuestion].incorrect_answers[1]}
            </button>
          </div>
          {currentQuestion === questions.length - 1 ? (
            <button
              className="navigate-btn"
              onClick={() => setQuizState("endScreen")}
            >
              Finish quiz!
            </button>
          ) : (
            <button className="navigate-btn" onClick={nextQuestion}>
              Next Question
            </button>
          )}
        </section>
      </div>
    );
  } else {
    return <div>Searching..</div>;
  }
}
