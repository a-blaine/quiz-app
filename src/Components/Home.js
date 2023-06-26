import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function Home() {
  const { quizState, setQuizState } = useContext(QuizContext);
  return (
    <div className="Home">
      <button className="navigate-btn" onClick={() => setQuizState("quiz")}>
        Start Quiz!
      </button>
    </div>
  );
}
