import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function EndScreen() {
  const { setQuizState, score, setScore } = useContext(QuizContext);

  const backToHome = () => {
    setScore(0);
    setQuizState("home");
  };

  return (
    <div className="EndScreen">
      <section>
        <h2>You got {score} questions right!</h2>

        <button className="navigate-btn" onClick={backToHome}>
          Click here to try again!
        </button>
      </section>
    </div>
  );
}
