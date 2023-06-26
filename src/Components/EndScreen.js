import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function EndScreen() {
  const { quizState, setQuizState } = useContext(QuizContext);

  return (
    <div className="EndScreen">
      <h2>You're finished!</h2>
      <button onClick={() => setQuizState("home")}>
        Click here to return to home!
      </button>
    </div>
  );
}
