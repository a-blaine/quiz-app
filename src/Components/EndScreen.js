import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function EndScreen() {
  const { quizState, setQuizState, score, setScore } = useContext(QuizContext);

  return (
    <div className="EndScreen">
      <h2>You got {score} questions right!</h2>

      <button className="navigate-btn" onClick={() => setQuizState("home")}>
        Click here to try again!
      </button>
    </div>
  );
}
