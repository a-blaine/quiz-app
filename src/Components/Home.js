import React, { useContext } from "react";
import { QuizContext } from "../Helpers/Contexts";

export default function Home() {
  const { setQuizState } = useContext(QuizContext);

  return (
    <div className="Home">
      <section>
        <button className="navigate-btn" onClick={() => setQuizState("quiz")}>
          Start Quiz!
        </button>
      </section>
    </div>
  );
}
