import React, { useState, useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function Questions({ questions, loaded }) {
  const { score, setScore, quizState, setQuizState } = useContext(QuizContext);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState();

  const nextQuestion = () => {
    if (optionChosen === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }
    console.log(score);
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
            <button
              onClick={() =>
                setOptionChosen(questions[currentQuestion].incorrect_answers[2])
              }
            >
              {questions[currentQuestion].incorrect_answers[2]}
            </button>
            <button
              onClick={() =>
                setOptionChosen(questions[currentQuestion].correct_answer)
              }
            >
              {questions[currentQuestion].correct_answer}
            </button>
            <button
              onClick={() =>
                setOptionChosen(questions[currentQuestion].incorrect_answers[0])
              }
            >
              {questions[currentQuestion].incorrect_answers[0]}
            </button>
            <button
              onClick={() =>
                setOptionChosen(questions[currentQuestion].incorrect_answers[1])
              }
            >
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
