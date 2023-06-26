import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function Quiz() {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <div className="quiz">
      <h2>Q1. What is the word for horse in Spanish?</h2>
      <ul>
        <li>Cabra</li>
        <li>Caballo</li>
        <li>Perro</li>
        <li>Gatito</li>
      </ul>
      <button onClick={() => setQuizState("endScreen")}>
        Click to reveal score!
      </button>
    </div>
  );
}
