import React, { useState } from "react";
import "./App.css";
import EndScreen from "./Components/EndScreen";
import Home from "./Components/Home";
import Quiz from "./Components/Quiz";
import { QuizContext } from "./Helpers/Contexts";

function App() {
  const [quizState, setQuizState] = useState("home");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>Trivia Quiz App</h1>
      <QuizContext.Provider
        value={{ quizState, setQuizState, score, setScore }}
      >
        {quizState === "home" && <Home />}
        {quizState === "quiz" && <Quiz />}
        {quizState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
